import ServerTest from "@/components/ServerTest"
import Numbers from "@/components/Numbers"
import BasicUsage from "@/components/BasicUsage"
import styles from './styles.module.css'
import { Typography } from "@mui/material";
import CtaBox from "@/components/CtaBox";
import Footer from "@/components/footer";

export default function About() {
  return (
   <main>
    {/* <Typography className={styles.title}>The about page</Typography>
    <ServerTest/>
    <Numbers/>
    <BasicUsage/> */}
    <CtaBox/>
   </main>
  );
}
