// ==================== Utility Functions ====================

/**
 * 쿠폰 코드를 클립보드에 복사
 * @param {string} couponCode - 복사할 쿠폰 코드
 */
function copyCoupon(couponCode) {
    // 임시 텍스트 영역 생성
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = couponCode;
    document.body.appendChild(tempTextArea);
    
    // 텍스트 선택 및 복사
    tempTextArea.select();
    document.execCommand('copy');
    
    // 임시 텍스트 영역 제거
    document.body.removeChild(tempTextArea);
    
    // 사용자에게 피드백 제공
    showNotification(`쿠폰 코드 "${couponCode}"가 복사되었습니다!`);
    
    // 1초 후 자동으로 등록 페이지 열기
    setTimeout(() => {
        openRegistration();
    }, 1000);
}

/**
 * 쿠폰 등록 페이지로 이동
 */
function openRegistration() {
    // 쿠폰 등록 페이지 URL
    const registrationUrl = 'https://couponday.co.kr/?pid=p7476115&site=yesfile';
    
    // 새 탭에서 열기
    window.open(registrationUrl, '_blank');
}

/**
 * 특정 섹션으로 스크롤
 * @param {string} sectionId - 섹션의 ID
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * 알림 메시지 표시
 * @param {string} message - 표시할 메시지
 */
function showNotification(message) {
    // 기존 알림이 있으면 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #06a77d;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * 쿠폰 사용 시뮬레이터 계산
 */
function calculateBenefit() {
    const couponCountSelect = document.getElementById('coupon-count');
    const couponCount = parseInt(couponCountSelect.value);
    const monthlyPrice = 9900;
    
    // 결과 계산
    const totalSavings = monthlyPrice * couponCount;
    const period = `${couponCount}개월`;
    
    // DOM 업데이트
    document.getElementById('result-coupon').textContent = `${couponCount}개`;
    document.getElementById('result-period').textContent = period;
    document.getElementById('result-saving').textContent = `₩${totalSavings.toLocaleString('ko-KR')}`;
    document.getElementById('result-payment').textContent = '무료';
}

/**
 * 페이지 로드 시 초기화
 */
document.addEventListener('DOMContentLoaded', function() {
    // 초기 계산 실행
    if (document.getElementById('coupon-count')) {
        calculateBenefit();
    }
    
    // 스크롤 이벤트 리스너 추가
    addScrollListeners();
    
    // 폼 검증 추가
    addFormValidation();
});

/**
 * 스크롤 이벤트 리스너 추가 (애니메이션)
 */
function addScrollListeners() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션할 요소들 선택
    const animateElements = document.querySelectorAll(
        '.feature-card, .coupon-card, .faq-item, .info-card, .step'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

/**
 * 폼 검증 추가
 */
function addFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 검증 로직
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e63946';
                    showNotification('모든 필드를 입력해주세요.');
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });
            
            if (isValid) {
                showNotification('양식이 제출되었습니다.');
                // 실제 제출 로직은 여기에 추가
            }
        });
    });
}

/**
 * 네비게이션 활성화 상태 업데이트
 */
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 페이지 로드 시 네비게이션 업데이트
document.addEventListener('DOMContentLoaded', updateActiveNavigation);

/**
 * 키보드 단축키 추가
 */
document.addEventListener('keydown', function(e) {
    // Ctrl+C 또는 Cmd+C: 쿠폰 복사 (포커스된 쿠폰 카드에서)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const focusedCoupon = document.activeElement.closest('.coupon-card');
        if (focusedCoupon) {
            const codeText = focusedCoupon.querySelector('.code-text').textContent;
            copyCoupon(codeText);
        }
    }
});

/**
 * 페이지 성능 최적화 - 이미지 지연 로딩
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * 외부 링크 추적 (분석용)
 */
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
        // 외부 링크 클릭 추적
        console.log('External link clicked:', link.href);
        
        // Google Analytics 또는 다른 분석 도구에 전송 가능
        if (typeof gtag !== 'undefined') {
            gtag('event', 'outbound_link', {
                'destination_url': link.href
            });
        }
    }
});

/**
 * 모바일 메뉴 토글 (필요시)
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * 검색 기능 (필요시)
 */
function searchCoupons(query) {
    const coupons = document.querySelectorAll('.coupon-card');
    const searchQuery = query.toLowerCase();
    
    coupons.forEach(coupon => {
        const text = coupon.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            coupon.style.display = 'block';
        } else {
            coupon.style.display = 'none';
        }
    });
}

/**
 * 필터링 기능 (필요시)
 */
function filterByCategory(category) {
    const items = document.querySelectorAll('[data-category]');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * 페이지 상단으로 이동 버튼
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 스크롤 시 상단 이동 버튼 표시/숨김
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

/**
 * 쿠폰 공유 기능
 */
function shareCoupon(couponCode) {
    const shareText = `예스파일 무료쿠폰: ${couponCode}\n프리미엄 기능을 무료로 이용하세요!\nhttps://yes.mrt-offer.co.kr/`;
    
    if (navigator.share) {
        navigator.share({
            title: '예스파일 무료쿠폰',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Share failed:', err));
    } else {
        // 폴백: 클립보드에 복사
        copyCoupon(couponCode);
    }
}

/**
 * 통계 추적 (페이지 뷰)
 */
function trackPageView() {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    
    console.log('Page View:', {
        title: pageTitle,
        url: pageUrl,
        timestamp: new Date().toISOString()
    });
    
    // 분석 도구에 전송 가능
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_title': pageTitle,
            'page_path': pageUrl
        });
    }
}

// 페이지 로드 시 통계 추적
document.addEventListener('DOMContentLoaded', trackPageView);

/**
 * 쿠폰 유효성 검사
 */
function validateCoupon(couponCode) {
    const validCoupons = ['yes3416', 'yes3417', 'yes3418'];
    return validCoupons.includes(couponCode.toLowerCase());
}

/**
 * 로컬 스토리지에 쿠폰 저장
 */
function saveCouponToLocal(couponCode) {
    let savedCoupons = JSON.parse(localStorage.getItem('savedCoupons')) || [];
    
    if (!savedCoupons.includes(couponCode)) {
        savedCoupons.push(couponCode);
        localStorage.setItem('savedCoupons', JSON.stringify(savedCoupons));
        showNotification(`쿠폰 "${couponCode}"이(가) 저장되었습니다.`);
    }
}

/**
 * 저장된 쿠폰 불러오기
 */
function getSavedCoupons() {
    return JSON.parse(localStorage.getItem('savedCoupons')) || [];
}

/**
 * 쿠폰 등록 추적
 */
function trackCouponRegistration(couponCode) {
    const registrationData = {
        coupon: couponCode,
        timestamp: new Date().toISOString(),
        page: window.location.href
    };
    
    console.log('Coupon Registration:', registrationData);
    
    // 분석 도구에 전송 가능
    if (typeof gtag !== 'undefined') {
        gtag('event', 'coupon_registration', {
            'coupon_code': couponCode
        });
    }
}

/**
 * 에러 처리
 */
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    showNotification('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
});

/**
 * 네트워크 상태 확인
 */
window.addEventListener('offline', function() {
    showNotification('인터넷 연결이 끊어졌습니다.');
});

window.addEventListener('online', function() {
    showNotification('인터넷 연결이 복구되었습니다.');
});

// CSS 애니메이션 정의 (동적 추가)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
