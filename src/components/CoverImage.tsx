import React, { useState, useEffect } from 'react';

interface CoverImageProps {
    src?: string;
    alt?: string;
    /** Rendered when there is no src, or the remote image fails to load. */
    fallback: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * Remote cover/thumbnail image with graceful degradation (L38):
 * - `loading="lazy"` — offscreen covers don't block first paint or waste bandwidth;
 * - `referrerPolicy="no-referrer"` — never leaks the app/feed URL to the image host;
 * - `onError` → falls back to the initials placeholder instead of a broken-image glyph.
 */
export const CoverImage: React.FC<CoverImageProps> = ({ src, alt = '', fallback, className, style }) => {
    const [failed, setFailed] = useState(false);
    // Reset the error state when the source changes (list rows are recycled).
    useEffect(() => { setFailed(false); }, [src]);

    if (!src || failed) return <>{fallback}</>;

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
        />
    );
};
