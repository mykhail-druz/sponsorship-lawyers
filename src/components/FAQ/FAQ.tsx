import styles from "./FAQ.module.css";
import { poppins, basker } from "@/fonts/fonts";
import { Card } from "./Card";

export const FAQ = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.h1} ${basker.className}`}>
          Frequently asked questions
        </h1>
        <Card
          title={`01. How long does it take for a UK employer to get a sponsor licence?`}
          desc={`The standard processing time for a sponsor licence application is 8 weeks. However, this can vary depending on whether you have provided the correct documentation in the right format as part of the application process and whether you have given accurate information on the application form. There is an option to get a quicker decision within 10 working days if you pay an extra £500.`}
        />
        <Card
          title={`02. How much does it cost an employer to sponsor in the UK?`}
          desc={`The costs involved with sponsoring a worker depend on the size of the company and the type of licence required. For instance, for a standard worker sponsor licence medium or large companies must pay £1476 and small companies must pay £536. There are additional costs involved too such as paying to assign a certificate of sponsorship which is £199 and, in some cases, paying the immigration skills charge which for small businesses is £364 and for large businesses is £1000.`}
        />
        <Card
          title={`03. What is a sponsorship certificate?`}
          desc={`A sponsorship certificate or certificate of sponsorship (CoS) is an electronic document with a unique reference number that is given to the foreign worker by the sponsoring employer to prove that they have permission to work in the UK for the sponsoring company. All UK sponsors must apply for and assign a certificate of sponsorship to all foreign employees applying for a visa. There are two types of certificates of sponsorship, undefined and defined.`}
        />
        <Card
          title={`04. What is an Immigration Skills Charge?`}
          desc={`Depending on the type of worker that you hire, you may be required to pay an Immigration Skills Charge. This is an additional charge that the Home Office collects if you employ skilled workers or senior or specialist workers. Small businesses will need to pay £364 for the first 12 months and £182 for each additional 6-month period, whereas medium or large companies will be charged £1000 and then £500 for each 6-month period after.`}
        />
        <Card
          title={`05. Who pays the fees, the employee or the employer?`}
          desc={`The employer will need to pay for their sponsor licence application, the certificates of sponsorship and the Immigration Skills Charge. Whereas the employee may pay for their visa application.`}
        />
        <Card
          title={`06. Who is eligible for a Skilled Worker visa in the UK?`}
          desc={`Someone can be eligible for a Skilled Worker visa if they have a job offer from a sponsoring company in the UK for a job that is on the list of skilled worker occupations. The skilled worker must have the required skills and experience to undergo the role in the company and have the required level of English language ability.`}
        />
      </div>
    </section>
  );
};
