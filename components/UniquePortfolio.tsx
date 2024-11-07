'use client'

import { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, MousePointer2 } from 'lucide-react'

export default function UniquePortfolio() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleGridItemHover = (index: number) => {
      gridItemsRef.current[index]?.classList.add('active')
    }

    const handleGridItemLeave = (index: number) => {
      gridItemsRef.current[index]?.classList.remove('active')
    }

    document.addEventListener('mousemove', handleMouseMove)
    gridItemsRef.current.forEach((item, index) => {
      item?.addEventListener('mouseenter', () => handleGridItemHover(index))
      item?.addEventListener('mouseleave', () => handleGridItemLeave(index))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      gridItemsRef.current.forEach((item, index) => {
        item?.removeEventListener('mouseenter', () => handleGridItemHover(index))
        item?.removeEventListener('mouseleave', () => handleGridItemLeave(index))
      })
    }
  }, [])

  const setGridItemRef = (el: HTMLDivElement | null, index: number) => {
    gridItemsRef.current[index] = el
  }

  return (
    <div className="unique-portfolio">
      <div className="custom-cursor" ref={cursorRef}>
        <MousePointer2 size={24} />
      </div>
      <div className="grid-container">
        <div className="grid-item name" ref={(el) => setGridItemRef(el, 0)}>
          <h1>John Doe</h1>
          <p>Creative Developer</p>
        </div>
        <div className="grid-item about" ref={(el) => setGridItemRef(el, 1)}>
          <h2>About Me</h2>
          <p>I craft digital experiences that blend creativity and technology.</p>
        </div>
        <div className="grid-item skills" ref={(el) => setGridItemRef(el, 2)}>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS/SASS</li>
            <li>Three.js</li>
          </ul>
        </div>
        <div className="grid-item projects" ref={(el) => setGridItemRef(el, 3)}>
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project">
              <h3>Immersive Web Experience</h3>
              <p>A 3D interactive website showcasing products in a virtual space.</p>
            </div>
            <div className="project">
              <h3>AI-Powered Chat Interface</h3>
              <p>A sleek, responsive chatbot with natural language processing capabilities.</p>
            </div>
            <div className="project">
              <h3>Data Visualization Dashboard</h3>
              <p>An interactive dashboard presenting complex data in an intuitive manner.</p>
            </div>
          </div>
        </div>
        <div className="grid-item contact" ref={(el) => setGridItemRef(el, 4)}>
          <h2>Get in Touch</h2>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
