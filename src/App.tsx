import { useState } from 'react'
import bgVideo from './assets/bg_video.mp4'

type PageType = 'home' | 'about' | 'projects' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1.5rem',
            position: 'relative',
            zIndex: 101
          }}>
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,1), 0px 0px 20px rgba(0,0,0,0.8)',
              transform: 'translateY(-6vh)'
            }}>
              Full Stack Developer & Designer
            </h1>
            
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'white',
              textAlign: 'center',
              maxWidth: '36rem',
              margin: '0 auto',
              textShadow: '2px 2px 4px rgba(0,0,0,1)'
            }}>
              Passionate about creating beautiful, functional web applications that solve real-world problems. Let's build something amazing together.
            </p>
            
            <button 
              onClick={() => handleNavigation('projects')}
              style={{
                borderRadius: '9999px',
                border: '2px solid rgba(255, 255, 255, 0.6)',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.25s',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                textShadow: '1px 1px 2px rgba(0,0,0,1)',
                marginTop: '1.5rem',
                transform: 'translateY(3vh)'
              }}
            >
              View My Work
            </button>
          </div>
        )

      case 'about':
        return (
          <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 1.5rem',
            position: 'relative',
            zIndex: 101,
            maxWidth: '50rem',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,1)',
              transform: 'translateY(-6vh)'
            }}>
              About Me
            </h1>
            
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 400,
              color: 'white',
              textAlign: 'center',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
              textShadow: '2px 2px 4px rgba(0,0,0,1)',
              transform: 'translateY(-2vh)'
            }}>
              I'm a passionate full-stack developer with over 3 years of experience in creating modern web applications. 
              I love turning complex problems into simple, beautiful solutions that provide great user experiences.
            </p>

            <div style={{ marginBottom: '1.5rem', transform: 'translateY(1vh)' }}>
              <h2 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'white',
                textAlign: 'center',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                Skills
              </h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'center'
              }}>
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Next.js'].map(skill => (
                  <span key={skill} style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    textShadow: '1px 1px 2px rgba(0,0,0,1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )

      case 'projects':
        return (
          <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 1.5rem',
            position: 'relative',
            zIndex: 101,
            maxWidth: '60rem',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,1)',
              transform: 'translateY(-6vh)'
            }}>
              My Projects
            </h1>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              width: '100%',
              transform: 'translateY(-1vh)'
            }}>
              {[
                {
                  name: 'E-Commerce Platform',
                  description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
                  tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
                  github: '#'
                },
                {
                  name: 'Task Management App',
                  description: 'Collaborative task management tool with real-time updates',
                  tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
                  github: '#'
                },
                {
                  name: 'Weather Dashboard',
                  description: 'Beautiful weather app with interactive charts and forecasts',
                  tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
                  github: '#'
                },
                {
                  name: 'Portfolio Website',
                  description: 'Responsive portfolio website with smooth animations',
                  tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
                  github: '#'
                }
              ].map((project, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '0.5rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,1)'
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '1rem',
                    lineHeight: 1.5,
                    textShadow: '1px 1px 2px rgba(0,0,0,1)'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        color: 'white',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    transition: 'all 0.25s'
                  }}>
                    View Code →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )

      case 'contact':
        return (
          <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 1.5rem',
            position: 'relative',
            zIndex: 101,
            maxWidth: '50rem',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'white',
              textAlign: 'center',
              marginBottom: '0.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,1)',
              transform: 'translateY(-6vh)'
            }}>
              Let's Work Together
            </h1>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              backdropFilter: 'blur(15px)',
              textAlign: 'center',
              maxWidth: '40rem',
              transform: 'translateY(-1vh)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                Ready to Create Something Amazing?
              </h2>
              
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
                lineHeight: 1.6,
                textShadow: '1px 1px 2px rgba(0,0,0,1)'
              }}>
                I'm always excited to collaborate on new projects and bring innovative ideas to life. 
                Whether you need a stunning website, a robust web application, or technical consulting, 
                I'm here to help you achieve your goals.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a href="mailto:sanskar@email.com" style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '9999px',
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.25s',
                  textShadow: '1px 1px 2px rgba(0,0,0,1)'
                }}>
                  📧 Email Me
                </a>
                <a href="#" style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '9999px',
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.25s',
                  textShadow: '1px 1px 2px rgba(0,0,0,1)'
                }}>
                  💬 Schedule Call
                </a>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      width: '100vw', 
      overflow: 'hidden' 
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          pointerEvents: 'none'
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 2
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '1.5rem',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          pointerEvents: 'auto'
        }}>
          <a href="#" 
             onClick={(e) => {
               e.preventDefault()
               handleNavigation('home')
             }}
             style={{
               fontFamily: 'Dancing Script, cursive',
               fontSize: '2.2rem',
               fontWeight: 400,
               color: 'white',
               textDecoration: 'none',
               userSelect: 'none',
               WebkitUserSelect: 'none',
               MozUserSelect: 'none',
               msUserSelect: 'none',
               pointerEvents: 'auto'
             }}
          >
            Sanskar
          </a>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3.5rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'white'
          }}>
            <button 
              onClick={() => handleNavigation('home')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'home' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: currentPage === 'home' ? '2px 2px 4px rgba(0,0,0,1), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' : '2px 2px 4px rgba(0,0,0,1)',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: currentPage === 'home' ? 600 : 500,
                pointerEvents: 'auto'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'about' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: currentPage === 'about' ? '2px 2px 4px rgba(0,0,0,1), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' : '2px 2px 4px rgba(0,0,0,1)',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: currentPage === 'about' ? 600 : 500,
                pointerEvents: 'auto'
              }}
            >
              About Me
            </button>
            <button 
              onClick={() => handleNavigation('projects')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'projects' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: currentPage === 'projects' ? '2px 2px 4px rgba(0,0,0,1), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' : '2px 2px 4px rgba(0,0,0,1)',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: currentPage === 'projects' ? 600 : 500,
                pointerEvents: 'auto'
              }}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'contact' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: currentPage === 'contact' ? '2px 2px 4px rgba(0,0,0,1), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' : '2px 2px 4px rgba(0,0,0,1)',
                transition: 'all 0.25s',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: currentPage === 'contact' ? 600 : 500,
                pointerEvents: 'auto'
              }}
            >
              Contact
            </button>
          </div>
        </nav>
        
        {renderContent()}
        
        {currentPage === 'home' && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '2rem',
            width: '100%',
            maxWidth: '64rem',
            padding: '0 1.5rem 2rem 1.5rem',
            zIndex: 101
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              margin: '0 auto',
              textShadow: '2px 2px 4px rgba(0,0,0,1)'
            }}>
              Transforming ideas into digital experiences through clean code and thoughtful design.
            </p>
          </div>
        )}
        
        {(currentPage === 'about' || currentPage === 'contact') && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '2rem',
            width: '100%',
            maxWidth: '64rem',
            padding: '0 1.5rem 2rem 1.5rem',
            zIndex: 101
          }}>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#" style={{
                fontFamily: 'JetBrains Mono, Consolas, "Courier New", monospace',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                resume
              </a>
              <a href="#" style={{
                fontFamily: 'JetBrains Mono, Consolas, "Courier New", monospace',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                github
              </a>
              <a href="#" style={{
                fontFamily: 'JetBrains Mono, Consolas, "Courier New", monospace',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                linkedin
              </a>
              <a href="#" style={{
                fontFamily: 'JetBrains Mono, Consolas, "Courier New", monospace',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>
                twitter
        </a>
      </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
