import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  description: '忘记签到',
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们"
        description="每天打开不同的应用，记住各种活动的签到时间，是不是感觉太繁琐？忘记签到帮你一键解决这个烦恼！"
        content1=""
        content2=""
        content3=""
        content4=""
        content5=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
