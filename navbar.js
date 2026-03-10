(function() {
    function initializeNavbar() {
        const navRoot = document.getElementById('nav-links');
        if (!navRoot || navRoot.dataset.initialized === 'true') {
            return;
        }

        navRoot.dataset.initialized = 'true';

        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        const navMap = {
            'index.html': 'nav-home',
            'todo.html': 'nav-todo',
            'about.html': 'nav-about'
        };

        const navDropdown = document.getElementById('nav-links-dropdown');
        const navDropdownToggle = document.getElementById('nav-links-toggle');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

        if (navMap[currentPage]) {
            const activeLink = document.getElementById(navMap[currentPage]);
            if (activeLink) {
                activeLink.classList.add('active');
                if (navDropdown && navDropdown.contains(activeLink)) {
                    navDropdownToggle?.classList.add('active');
                }
            }
        }

        if (navDropdown && navDropdownToggle) {
            navDropdownToggle.addEventListener('click', function(event) {
                if (window.innerWidth > 768) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                const isOpen = navDropdown.classList.toggle('open');
                navDropdownToggle.setAttribute('aria-expanded', String(isOpen));
            });

            document.addEventListener('click', function(event) {
                if (!navDropdown.contains(event.target)) {
                    navDropdown.classList.remove('open');
                    navDropdownToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function() {
                navRoot.classList.toggle('active');
                this.classList.toggle('active');
            });
        }

        const links = navRoot.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuToggle?.classList.remove('active');
                navRoot.classList.remove('active');
                navDropdown?.classList.remove('open');
                navDropdownToggle?.setAttribute('aria-expanded', 'false');
            });
        });
    }

    window.initializeNavbar = initializeNavbar;
})();
