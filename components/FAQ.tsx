'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { siteData } from '@/lib/data';

export default function FAQ() {
  const { faqs } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="section section--cream" aria-labelledby="faq-title">
      <div className="section__inner">
        <div className="section__header">
          <h2 id="faq-title" className="section__title">
            Common Questions
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div className="accordion-item" data-open={isOpen} key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="accordion-item__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="accordion-item__icon" aria-hidden="true">
                      <FiPlus />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="accordion-item__panel"
                >
                  <div className="accordion-item__panel-inner">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
