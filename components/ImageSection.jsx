import Image from 'next/image';
export default function ImageSection() {
    return(
        <section className="bg-purple-500 flex justify-center items-center py-12">
        <Image width={1000} height={600} src="/10029.png" alt="games" className="w-full max-w-screen-lg object-contain" />
      </section>
    );
}