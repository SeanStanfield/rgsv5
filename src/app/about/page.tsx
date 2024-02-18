import ServerTest from "@/components/ServerTest"
import Numbers from "@/components/Numbers"
import BasicUsage from "@/components/BasicUsage"
import styles from './styles.module.css'
import { Typography } from "@mui/material";
import CtaBox from "@/components/CtaBox";
import Slider from "@/components/Slider";
import StatsBox from "@/components/StatsBox";
import SocialProof from "@/components/SocialProof";
import Faqs from "@/components/Faqs";

export default function About() {
  return (
   <main>
    {/* <Typography className={styles.title}>The about page</Typography>
    <ServerTest/>
    <Numbers/>
    <BasicUsage/> */}
    <Slider>
      <Typography>outer child</Typography>
    </Slider>
    <SocialProof images={[]}/>
    <Faqs faqs={[]} title={'Frequently asked questions'}/>
    <StatsBox/>
    <h1>Test</h1>
    <CtaBox/>
   </main>
   
  );
}
