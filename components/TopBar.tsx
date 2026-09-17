import { siteData } from '@/lib/data';

export default function TopBar() {
  const { header } = siteData;

  return (
    <div className="top-bar">
      <div className="top-bar__inner">
        <p className="top-bar__left">{header.topBarLeft}</p>
        <p className="top-bar__right">{header.topBarRight}</p>
      </div>
    </div>
  );
}
