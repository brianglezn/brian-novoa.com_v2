import { useTranslation } from 'react-i18next';

import './Projects.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import logoPL from '../assets/projects/PL/logoPL.svg';
import logoElearning from '../assets/projects/eLearning/logoElearning.svg';
import logoWordpress from '../assets/projects/WP/logoWordpress.svg';

export default function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <section className='projects'>
                <div>
                    <h2>{t('Projects.title')}</h2>
                    <p>{t('Projects.description')}</p>

                    <section className="projectsList">
                        <ProjectItem
                            imgSrc={logoPL}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/ProfitLost"
                        />
                        <ProjectItem
                            imgSrc={logoWordpress}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/WP"
                        />
                        <ProjectItem
                            imgSrc={logoElearning}
                            title={t('Projects.projectItems.ELearning.title')}
                            description={t('Projects.projectItems.ELearning.description')}
                            // href="/projects/ELearning"
                            href=""
                        />
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}
