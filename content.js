// Replace em dashes in ChatGPT responses
function replaceEmDashes(text) {
  return text.replace(/—/g, '-');
}

// Replace em dashes in all message content
function replaceEmDashesInMessages() {
  const messageElements = document.querySelectorAll('[data-message-author-role="assistant"] .markdown');
  messageElements.forEach(element => {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    let node;
    const textNodes = [];
    while (node = walker.nextNode()) {
      if (node.nodeValue.includes('—')) {
        textNodes.push(node);
      }
    }
    
    textNodes.forEach(textNode => {
      textNode.nodeValue = replaceEmDashes(textNode.nodeValue);
    });
  });
}

// Create a single tooltip element to be reused
let tooltipElement;
function getTooltip() {
    if (!tooltipElement) {
        tooltipElement = document.createElement('div');
        tooltipElement.className = 'custom-tooltip fixed px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow-lg whitespace-nowrap opacity-0 transition-opacity duration-300 pointer-events-none';
        tooltipElement.style.zIndex = '99999';
        document.body.appendChild(tooltipElement);
    }
    return tooltipElement;
}

// Add copy button with em dash replacement
function addCopyButton() {
  const originalCopyButtons = document.querySelectorAll('[data-testid="copy-turn-action-button"]');
  
  originalCopyButtons.forEach((originalCopyBtn) => {
    const actionsContainer = originalCopyBtn.parentElement;
    
    if (!actionsContainer || actionsContainer.querySelector('.em-dash-copy-btn')) {
      return;
    }

    let turnContainer = actionsContainer;
    let messageContent;
    
    for (let i = 0; i < 5 && turnContainer; i++) {
        messageContent = turnContainer.querySelector('[data-message-author-role="assistant"] .markdown');
        if (messageContent) break;
        messageContent = null;
        turnContainer = turnContainer.parentElement;
    }

    if (!messageContent || !turnContainer) return;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'em-dash-copy-btn flex h-10 w-10 items-center justify-center rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary';
    copyBtn.setAttribute('aria-label', 'Copy without em dashes');
    copyBtn.innerHTML = `
      <span class="flex h-10 w-10 items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7z" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <path d="M8 6.5h2.5M8 8.5h2.5M8 10.5h1.5" stroke="#10a37f" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
    `;

    const tooltip = getTooltip();

    const positionTooltip = () => {
        const btnRect = copyBtn.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.left = `${btnRect.left + (btnRect.width / 2) - (tooltipRect.width / 2)}px`;
        tooltip.style.top = `${btnRect.top - tooltipRect.height - 8}px`; // 8px gap above
    };
    
    copyBtn.addEventListener('mouseenter', () => {
        tooltip.textContent = 'Copy without emdash — ';
        tooltip.style.opacity = '1';
        positionTooltip();
    });

    copyBtn.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });

    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = messageContent.innerText;
      const cleanText = replaceEmDashes(text);
      navigator.clipboard.writeText(cleanText).then(() => {
        tooltip.textContent = 'Copied!';
        positionTooltip(); // Reposition after text change
        copyBtn.style.color = '#10a37f';
        setTimeout(() => {
            copyBtn.style.color = '';
        }, 2000);
      });
    });
    
    actionsContainer.insertBefore(copyBtn, originalCopyBtn.nextSibling);
  });
}

function processPage() {
  replaceEmDashesInMessages();
  addCopyButton();
}

setTimeout(processPage, 1000);

const observer = new MutationObserver(() => {
  setTimeout(processPage, 500);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
