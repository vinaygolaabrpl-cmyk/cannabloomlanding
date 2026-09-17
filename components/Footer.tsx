import Image from 'next/image';
import { siteData } from '@/lib/data';

export default function Footer() {
  const { footer, site } = siteData;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${site.logo.src}`}
          alt={site.logo.alt}
          width={124}
          height={82}
          className="site-footer__logo-img"
        />

        <p className="site-footer__legal-note">{footer.legalNote}</p>

        <p className="site-footer__bottom-line">
          {footer.copyright}
          {' · '}
          <a href={footer.privacyPolicyUrl} className="site-footer__privacy-link">
            {footer.privacyPolicyLabel}
          </a>
        </p>
      </div>
    </footer>
  );
}
