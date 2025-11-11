import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { useInView } from "react-intersection-observer";
import { Pointer } from '@/components/ui/pointer';

type SectionName = "About" | "Education" | "Skills" | "Projects";


interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}

export default function SectionsProject({ setActiveSection }: SectionProps) {
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  }, [inView])

  return (
    <section ref={ref} id="Projects" className=" flex flex-col gap-5 mb-45 scroll-mt-40">
      <ExperienceCard
        date="2024 — personal project"
        position="Java Project Management Application "
        company="Github"
        description="Built a full-stack desktop application using Java (OOP, Swing) for the frontend and MySQL for the backend database.
    Engineered key modules for: Project Management, Employee Management, Material Inventory, and Cost Calculation."
        link="https://github.com/Apiwat-Oraat/MiniProject-JavaOOP"
        technologies={[
          { label: "Java" },
          { label: "NetBeans IDE" },
          { label: "IntelliJ IDEA" },
          { label: "MySQL Workbench" },
        ]}
        image="https://private-user-images.githubusercontent.com/211654452/492041016-882057d8-4480-4f00-8c64-8d8277638e2b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3ODg2OTUsIm5iZiI6MTc2Mjc4ODM5NSwicGF0aCI6Ii8yMTE2NTQ0NTIvNDkyMDQxMDE2LTg4MjA1N2Q4LTQ0ODAtNGYwMC04YzY0LThkODI3NzYzOGUyYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQxNTI2MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2U1YWFkMTdjODQxZWIyZjZkZGY2MWM5ODc3Njg5ODZlN2I4ZmY2ZTk2YzQwMTljZjVmNDRkZDA0ODE5YzIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JcwAo8hROXNpbv7OjfrGdtpUUaJy2lrZU5ngLKPd4E0" // optional
      />
      <ExperienceCard
        date="2024 — personal project"
        position="C++ Financial Calculator Suite"
        company="Github"
        description="Built a multi-functional console application in C++ featuring 9 distinct financial planning and analysis tools.
    Implemented calculators for: Retirement, Loan Amortization, DCA Investing, Goal-Based Savings, Debt Management, and Tax Estimation."
        link="https://github.com/Apiwat-Oraat/MiniProject_Cpp"
        technologies={[
          { label: "C++" },
          { label: "visual Studio Code" },
        ]}
        image="https://private-user-images.githubusercontent.com/211654452/504663181-5253d82d-b0c9-48aa-a7ae-b054f3f1e811.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3ODk4NDQsIm5iZiI6MTc2Mjc4OTU0NCwicGF0aCI6Ii8yMTE2NTQ0NTIvNTA0NjYzMTgxLTUyNTNkODJkLWIwYzktNDhhYS1hN2FlLWIwNTRmM2YxZTgxMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQxNTQ1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZTE0Y2JkMzM5MjVhZjg1ZWUxMTA3NmM1ODFhNDQ1NDhkNWZjM2Q4NGQ4OTkzYjNmMjdjNDg1Yjc5MTg0MTY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.REXWLAplnNLiENjaQVNNR3f_T0sU9nhLgwOqGQkOqVI" // optional
      />

      <Pointer>
        <div className="text-2xl">👆</div>
      </Pointer>
    </section>
  )
}
