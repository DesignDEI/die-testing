"use client";

import Image from "next/image";

const Card = ({ src }: { src: string }) => (
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      src={src}
      alt=""
      fill
      className="object-cover"
    />
  </div>
);

export default function StatsHighlightLayout() {
  return (
    <section className="w-full bg-[#212121] py-28">
      <div className="mx-auto px-4 space-y-6">

        {/* ================= ROW 1 ================= */}
        <div
          className="mx-auto grid gap-6"
          style={{
            gridTemplateColumns: "499px 395px 286px",
            height: "337px",
            maxWidth: "1180px",
          }}
        >
          <Card src="/home/stats-highlight/1.svg" />
          <Card src="/home/stats-highlight/2.svg" />

          <div className="grid gap-6" style={{ gridTemplateRows: "150px 165px" }}>
            <Card src="/home/stats-highlight/3.svg" />
            <Card src="/home/stats-highlight/4.svg" />
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div
          className="mx-auto grid gap-6"
          style={{
            gridTemplateColumns: "287px 707px 184px",
            height: "337px",
            maxWidth: "1178px",
          }}
        >
          <Card src="/home/stats-highlight/5.svg" />
          <Card src="/home/stats-highlight/7.svg" />
          <Card src="/home/stats-highlight/6.svg" />
        </div>

        {/* ================= ROW 3 ================= */}
        <div
          className="mx-auto grid gap-6"
          style={{
            gridTemplateColumns: "395px 395px 395px",
            height: "337px",
            maxWidth: "1185px",
          }}
        >
          <Card src="/home/stats-highlight/8.svg" />
          <Card src="/home/stats-highlight/9.svg" />
          <Card src="/home/stats-highlight/10.svg" />
        </div>

      </div>
    </section>
  );
}
