import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo, Project, Social, Skill } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home( {pageInfo, projects, skills, socials} : Props ) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
                    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
                    scrollbar-thumb-[#F7AB0A]/50'>
      <Head>
        <title>Portfolio 2.0</title>
      </Head>

      <Header socials={socials} />
      
      <section id="hero" className='snap-start'>
        <Hero pageInfo={ pageInfo } />
      </section>


      <section id='about' className='snap-start'>
        <About pageInfo={ pageInfo } />
      </section>


      {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={ skills } />
      </section>
      
      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={ projects } />
      </section>


      {/* contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

    </div>
  )
}

export const getStaticProps : GetStaticProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
        pageInfo,
        socials,
        projects,
        skills,
    },
    revalidate: 10,
  }
}
