import FadeInSection from "./FadeInSection";

const photos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/400/500?random=${i + 1}`,
  alt: `Jack and Rose wedding moment ${i + 1}`,
}));

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-24 md:py-0"
      style={{ backgroundImage: "url('/src/assets/floral-bg.png')" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <FadeInSection delay={0}>
          <div className="text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-3xl text-slate-800 md:text-5xl">Our Moments</h2>
          </div>
        </FadeInSection>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {photos.map((photo, index) => (
            <FadeInSection key={photo.id} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[rgba(201,168,76,0)] transition group-hover:bg-[rgba(201,168,76,0.3)]" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
