import React, { useState } from 'react'
import Tabs from '../components/Tabs'
import { SKILL_TABS,SKILLS } from '../utils/data';
import SkillCard from '../components/SkillCard';
import {motion }from 'framer-motion'

const TechnicalProficiency = () => {

  const [tabData, setTabData] = useState(SKILLS.filter((skill) =>skill.type ==="fullstack"));
  const [activeTab, setActiveTab] = useState("fullstack");

  const handleTabValueChange = (value) =>{
      if(value == "fullstack"){
        setTabData(SKILLS.filter((skill) =>skill.type ==="fullstack"));
        setActiveTab("fullstack");
        return;
      }

      const updatedList = SKILLS.filter((skill) =>skill.type === value);
      setTabData(updatedList);
      setActiveTab(value);
  }


  return (
    <section className='max-w-7xl mx-auto'> 
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w[60vw] mx-auto'>
          <h4 className='text-[26px] font-semibold text-center text-[#FFAB2F]'>Technical Proficiency</h4>
          <p className='text-sm text-center mt-4 leading-6 text-white'>
            A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated  to building efficient, scalable, and user-centric solutions.
          </p>
        </div>
      <Tabs 
      tabList = {SKILL_TABS}
      activeTab = {activeTab}
      onChange = {handleTabValueChange}/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]'>
      {tabData.map((skill,index)=>(
        <motion.div key={skill.id}
        initial={{opacity:0,y:20}}
        animate = {{opacity:1, y:0}}
        transition={{duration:0.4,delay:index*0.1}}
        >
            <SkillCard
            icon={<skill.icon className='w-6 h-6 text-red-500'/>}
            skillName = {skill.skill}
            description = {skill.description}
            // progress = {skill.progress}
            />
        </motion.div>
      ))}
      </div>
      
      </div>
    </section>
  )
}

export default TechnicalProficiency