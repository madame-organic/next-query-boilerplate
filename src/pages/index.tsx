import React from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import th from "../../public/locale/th";
import en from "../../public/locale/en";

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const isThai = locale === 'th';
    const englishDescription = "Chu Choice ชู ชอยส์ เราให้ความสำคัญกับผลลัพธ์ และความปลอดภัยของลูกค้าเป็น อันดับแรก สินค้าคุณภาพผลิตในโรงงานอันดับ" +
        " 1 ของประเทศเกาหลี ได้รับการันตีจาก อย. ทั้งประเทศเกาหลีและประเทศไทย มั่นใจคุณภาพ ปลอดภัย ไร้สารตกค้าง";
    const thaiDescription = "Chu Choice - Your health is our primary concern. Quality products are produced in No. 1 factory in Korea." +
        " It has been guaranteed by the FDA both in korea and Thailand, ensuring quality, safety and no residue.";
    const englishKeywords = "ChuChoice, Chu Choice, health guaranteed, Fat Burn," +
        "Korea, Thailand, korean product to burn fat, korean supplements";
    const thaiKeywords = "ชู,ชูช้อยส์,อาหารเสริม,อาหารเสริมลดความอ้วน,อาหารเสริมลดน้ำหนัก,คุณภาพดี,คุณภาพอันดับ1,สินค้าคุณภาพ,เกาหลี,ประเทศเกาหลี," +
        "มาจากเกาหลี,มาจากประเทศเกาหลี,ปลอดภัย,ไม่อันตราย,มั่นใจ,มั่นใจปลอดภัย,การันตี,การันตีลดจริง,การันตีลดน้ำหนัก,อย.,มีอย.," +
        "ผ่านอย.,ได้รับการรับรอง,วิตามินหลากหลายชนิด,ทานวิตามิน,ผลิตภัณฑ์ลดอ้วน,ผลิตภัณฑ์เผาพลาญ,เผาพลาญไขมัน,เผาพลาญไขมันส่วนเกิน," +
        "หุ่นสวย,หุ่นดี,หุ่นปัง,หุ่นสับ,หุ่นนางแบบ,อยากผอม,อยากลด,อยากลดหุ่น,อยากลดน้ำหนัก,อยากลดความอ้วน,อยากลดพุง,ทันใจ,ผอมทันใจ," +
        "เอวเอส,เอวสับ,เอวสวิง,ลดอ้วนด่วน,ลดอ้วนลดพุง,ลดน้ำหนักเร่งด่วน,สูตรลดอ้วน,สูตรลดน้ำหนัก,ลดเร็วเวอร์,เวอร์,ลดเร็วตกใจ," +
        "ลดยาก,น้ำหนักไม่ยอมลด,วิธีลด,วิธีลดไขมัน,วิธีลดอ้วน,วิธีลดความอ้วน,เร่งด่วน,";
    const description = isThai ? thaiDescription : englishDescription;
    const keywords = isThai ? thaiKeywords : englishKeywords;
    const text = locale === 'th' ? th : en;

    return (
        <Layout
            pageTitle="Chu Choice"
            currentPageUrl="/"
            metaInfo={[
                {
                    name:"keywords",
                    content: keywords
                },
                {
                    name: "description",
                    content: description
                }
            ]}
        >
            <h1>{text.home.welcome}</h1>
        </Layout>
    );
}
