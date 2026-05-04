import React, { useState, useRef, useEffect } from 'react';
import mapImage from '@/assets/map-image.png';

const ContactSection = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [pinPos, setPinPos] = useState<{ left: string; top: string } | null>(() => {
    try {
      const raw = localStorage.getItem('mapPinPos');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (pinPos) {
      try {
        localStorage.setItem('mapPinPos', JSON.stringify(pinPos));
      } catch { }
    }
  }, [pinPos]);

  const handleClick = (e: React.MouseEvent) => {
    // Allow user to click the visible image to capture the exact destination marker position
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Clamp and convert to percentages
    const left = Math.max(0, Math.min(100, x * 100)).toFixed(4) + '%';
    const top = Math.max(0, Math.min(100, y * 100)).toFixed(4) + '%';
    setPinPos({ left, top });
  };

  // Set the pin from exact natural-image pixel coordinates provided below.
  // Will run on image load if there is no saved/manual position.
  const setPinFromImagePixels = (xPx: number, yPx: number) => {
    const img = imgRef.current;
    if (!img) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return;

    // Get the visible container size (where the image is shown)
    const rect = img.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    // Determine object-fit behavior (cover / contain / fill). Default to 'cover'.
    const styles = window.getComputedStyle(img);
    const objectFit = styles.objectFit || 'cover';
    // Compute scale used to draw the image inside the container
    const scale = objectFit === 'contain' ? Math.min(cw / w, ch / h) : Math.max(cw / w, ch / h);

    const displayW = w * scale;
    const displayH = h * scale;

    // Assume object-position: center center (default). Compute offsets of the drawn image inside container.
    const offsetX = (displayW - cw) / 2;
    const offsetY = (displayH - ch) / 2;

    // Convert natural-pixel coords to displayed-image coords, then to container-relative coords
    const dispX = xPx * scale - offsetX;
    const dispY = yPx * scale - offsetY;

    const leftPercent = (dispX / cw) * 100;
    const topPercent = (dispY / ch) * 100;

    const left = Math.max(0, Math.min(100, leftPercent)).toFixed(4) + '%';
    const top = Math.max(0, Math.min(100, topPercent)).toFixed(4) + '%';
    setPinPos({ left, top });
  };

  // Set the pin from exact display-image pixel coordinates (pixels relative to the visible image in the layout).
  // Use this when your coordinates come from a screenshot or displayed layout.
  const setPinFromDisplayPixels = (xPx: number, yPx: number) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    if (!cw || !ch) return;
    const left = Math.max(0, Math.min(100, (xPx / cw) * 100)).toFixed(4) + '%';
    const top = Math.max(0, Math.min(100, (yPx / ch) * 100)).toFixed(4) + '%';
    setPinPos({ left, top });
  };

  // Map from a custom 1000x1000 coordinate space where origin is bottom-left.
  // Given (x,y) in that space, convert to percentages for the displayed image.
  const setPinFromCustom1000 = (x: number, y: number) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    if (!cw || !ch) return;

    // Normalize given coords to [0,1] where (0,0) is bottom-left of the 1000x1000 space
    const nx = x / 1000;
    const ny = y / 1000;

    // Because origin is bottom-left, invert Y to get top-left origin used by CSS
    const topNorm = 1 - ny;

    const left = Math.max(0, Math.min(100, nx * 100)).toFixed(4) + '%';
    const top = Math.max(0, Math.min(100, topNorm * 100)).toFixed(4) + '%';
    setPinPos({ left, top });
  };

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Shiloh Consultations
              </h3>
              <p className="text-lg text-text-primary mb-4">
                3130 Chaparral Drive, Building B, Suite 202, Roanoke VA - 24018
              </p>
              <p className="text-lg text-text-primary">
                Ph: <a href="tel:5404042682" className="text-primary hover:underline">(540)-404-2682</a>
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Hours</h4>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">Open today</span>
                  <span className="text-text-primary">09:00 am – 05:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map image with enhanced styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                ref={imgRef}
                src={mapImage}
                alt="Location map for Shiloh Consultation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-crosshair"
                onClick={handleClick}
                onLoad={() => {
                  // Try mapping from the user's custom 1000x1000 bottom-left coordinate space
                  if (!pinPos) {
                    setPinFromCustom1000(170, 210);
                  }
                }}
              />

              {/* Pulsating ping only — click the image on the red marker to capture exact position */}
              {pinPos && (
                <div
                  className="absolute z-30 pointer-events-none"
                  style={{ left: pinPos.left, top: pinPos.top, transform: 'translate(-50%, -50%)' }}
                  aria-hidden
                >
                  {/* pulsating outer ring only (no solid center) */}
                  <span className="inline-block w-8 h-8 rounded-full bg-green-500/40 animate-ping" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
