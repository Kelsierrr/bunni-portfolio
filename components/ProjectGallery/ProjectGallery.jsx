import Image from "next/image";
import styles from "./ProjectGallery.module.css";

export default function ProjectGallery({ images = [] }) {
  if (!images.length) return null;
  return (
    <div className={styles.grid}>
      {images.map((img) => (
        <figure key={img.src} className={styles.item}>
          <div className={styles.thumb}>
            <Image
              src={img.src}
              alt={img.alt || ""}
              fill
              className={styles.img}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
          {img.caption && <figcaption className={styles.caption}>{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
