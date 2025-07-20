document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuBtn = document.querySelector('.menu-mobile-btn');
  const menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
  });
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      menuBtn.querySelector('i').classList.add('fa-bars');
      menuBtn.querySelector('i').classList.remove('fa-times');
    });
  });
  
  // Efeito de scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header com efeito de scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Animação dos elementos ao rolar a página
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.servico-categoria, .resultado-item, .depoimento, .membro');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Configurar elementos para animação
  document.querySelectorAll('.servico-categoria, .resultado-item, .depoimento, .membro').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Disparar animação ao carregar e ao rolar
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Formulário de contato
  const contactForm = document.getElementById('form-contato');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envio do formulário
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Mensagem Enviada!';
        
        // Resetar formulário após 2 segundos
        setTimeout(() => {
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
  
  // Preencher automaticamente o telefone
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      
      if (value.length > 0) {
        value = '(' + value;
      }
      
      if (value.length > 3) {
        value = value.substring(0, 3) + ') ' + value.substring(3);
      }
      
      if (value.length > 10) {
        value = value.substring(0, 10) + '-' + value.substring(10);
      }
      
      this.value = value.substring(0, 15);
    });
  }
});