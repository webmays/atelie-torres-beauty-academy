// ==========================================================================
// ATELIÊ TORRES BEAUTY ACADEMY — INTERAÇÕES BÁSICAS E ACESSIBILIDADE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  // Efeito de sombra sutil e fundo sólido no scroll do header
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Controle do Menu Mobile (Drawer)
  const openMenu = () => {
    mobileDrawer?.classList.add('active');
    drawerOverlay?.classList.add('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileDrawer?.classList.remove('active');
    drawerOverlay?.classList.remove('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileMenuBtn?.addEventListener('click', openMenu);
  drawerCloseBtn?.addEventListener('click', closeMenu);
  drawerOverlay?.addEventListener('click', closeMenu);

  // Fechar drawer com tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('active')) {
      closeMenu();
    }
  });

  // Fechar drawer ao clicar em qualquer link interno
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
