
export const useRevealAnimation = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
  
  const setupObserver = () => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  };
  
  return { setupObserver };
};

export interface DelayOptions {
  children?: number;
  container?: number;
}

export const getAnimationDelay = (index: number, staggerDelay = 0.1) => {
  return { animationDelay: `${index * staggerDelay}s` };
};

export const getRevealClasses = (direction?: 'left' | 'right' | 'up' | 'down') => {
  return `reveal${direction ? ` data-direction="${direction}"` : ''}`;
};
