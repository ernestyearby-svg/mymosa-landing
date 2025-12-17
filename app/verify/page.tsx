'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';

function setCookie(name: string, value: string, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

export default function VerifyPage() {
  const params = useSearchParams();
  const router = useRouter();
  const nextPath = useMemo(() => params.get('next') || '/', [params]);

  const enter = () => {
    setCookie('mymosa_age_verified', 'true', 30);
    router.replace(nextPath);
  };

  return (
    <main style={{ minHeight: '100vh' }}>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
          src="/verification_desktop.png"
          alt="MyMosa age verification"
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <button className="btn" onClick={enter} aria-label="Confirm you are 21+ and enter">
            YES, I’M 21+ — Enter
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          :global(img[alt='MyMosa age verification']) {
            content: url('/verification_mobile.png');
          }
        }
      `}</style>
    </main>
  );
}
