import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiExternalLink } from 'react-icons/fi'

type TagVariant = 'cyan' | 'purple' | 'green' | 'orange'

type Project = {
  title: string
  description: string
  highlights: string[]
  tags: string[]
  github?: string
  demo?: string
  accent: string
  tagClass: TagVariant
}

const tagStyles: Record<TagVariant, string> = {
  cyan: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100',
  purple: 'bg-violet-50 text-violet-700 ring-1 ring-violet-100',
  green: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  orange: 'bg-orange-50 text-orange-700 ring-1 ring-orange-100',
}

const projects: Project[] = [
  {
    title: 'MedCareBot',
    description:
      'RAG-powered health chatbot with session memory, personalized responses, and proactive drug interaction alerts. It combines retrieval, validation, and user context so the assistant stays grounded and useful across follow-up questions.',
    highlights: [
      'RAG pipeline grounded in OpenFDA pharmaceutical data',
      'Session memory stored in PostgreSQL for multi-turn continuity',
      'AWS Cognito used for authentication and user personalization',
      'Safety guardrails added to reduce hallucinations and unsafe output',
    ],
    tags: ['Python', 'LLM API', 'ChromaDB', 'PostgreSQL', 'AWS Cognito', 'React'],
    github: '',
    demo: 'https://youtu.be/U7IhxBO73TA',
    accent: '#0ea5e9',
    tagClass: 'cyan',
  },
  {
    title: 'University Chatbot',
    description:
      'Multilingual intent-based chatbot built for university queries with both voice and text input support. The system uses an RNN based pipeline and is tuned to recognize common FAQ style questions with high accuracy.',
    highlights: [
      '97% intent recognition accuracy on held-out test data',
      'Voice and text inputs processed through the same NLP pipeline',
      'Bidirectional RNN with stacked LSTM cells for classification',
      'Dockerized Flask backend behind Nginx for deployment',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Flask', 'JavaScript', 'Docker', 'Nginx'],
    github: 'https://github.com/Jahnavi33380/College-chatbot',
    demo: '',
    accent: '#8b5cf6',
    tagClass: 'purple',
  },
  {
    title: 'Semantic Travel Planner',
    description:
      'Knowledge graph based travel planner that generates personalized itineraries using semantic reasoning and geospatial optimization. It uses ontology driven modeling to turn user preferences into ranked trip options.',
    highlights: [
      'OWL ontology models travel entities like places, activities, and routes',
      'SPARQL engine translates user preferences into queryable itinerary logic',
      'Geospatial clustering reduces travel time across suggested day plans',
      'DBpedia and Wikidata queries enrich destinations automatically',
    ],
    tags: ['RDF', 'OWL', 'SPARQL', 'Apache Jena', 'Python', 'JavaScript', 'DBpedia'],
    github: 'https://github.com/Jahnavi33380/travel-path',
    demo: 'https://www.youtube.com/watch?v=JlH7uBYJ6wM',
    accent: '#f97316',
    tagClass: 'orange',
  },
  {
    title: 'Nap Sync',
    description:
      'Real time social music platform with collaborative playlists, live chat, and artist browsing. The app was designed to feel instant and interactive through WebSocket based synchronization and optimistic updates.',
    highlights: [
      'Socket.io powers live playlist sync and instant group chat',
      'JWT secured REST APIs handle authentication and playlist actions',
      'MongoDB aggregation supports search, trending songs, and recommendations',
      'Redis ready scaling approach supports multiple Node.js instances',
    ],
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'RxJS'],
    github: 'https://github.com/Jahnavi33380/MusicApp',
    demo: '',
    accent: '#06b6d4',
    tagClass: 'cyan',
  },
  {
    title: 'Distributed System',
    description:
      'Fault tolerant distributed system built with Cassandra and HAProxy to demonstrate replication, load balancing, and failure resilience. The setup was tested against node failures to verify that reads and writes continue without data loss.',
    highlights: [
      'Multi node Cassandra ring created through Docker Compose',
      'NetworkTopologyStrategy with replication factor of 3',
      'HAProxy distributes traffic with active health checks',
      'Fault injection tests confirmed availability during node failures',
    ],
    tags: ['Cassandra', 'HAProxy', 'Docker', 'Docker Compose', 'CQL'],
    github: 'https://github.com/Jahnavi33380/Fault-Tolerance-Consistency-and-Data-Replication-using-Cassandra-and-Trafeik-on-Docker-Desktop',
    demo: '',
    accent: '#6366f1',
    tagClass: 'purple',
  },
  {
    title: 'Forsaken Seal',
    description:
      'Third person Unity action adventure game set in a dark fantasy world. The project combines enemy AI, progression systems, traps, and performance tuning to deliver a playable experience with stable combat and level flow.',
    highlights: [
      'Finite state machine drives enemy behavior across five states',
      'NavMesh handles dynamic pathfinding through complex environments',
      'Object pooling improves projectile and particle performance',
      'LOD groups, culling, and batching help maintain 60 fps gameplay',
    ],
    tags: ['Unity', 'C#', 'NavMesh', 'ScriptableObjects', 'Game Dev'],
    github: 'https://github.com/Jahnavi33380/The-Forsaken-Seal',
    demo: 'https://www.youtube.com/watch?v=EhBYGzc9ang',
    accent: '#14b8a6',
    tagClass: 'cyan',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full min-h-[640px] flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div style={{ height: 4, background: project.accent }} />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
            {project.title}
          </h3>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl flex items-center justify-center border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0"
              aria-label={`${project.title} GitHub`}
            >
              <FiGithub size={17} />
            </a>
          ) : (
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center border border-slate-100 bg-slate-50 text-slate-300 shrink-0">
              <FiGithub size={17} />
            </div>
          )}
        </div>

        <p
          className="text-slate-600 text-[15px] leading-7 mb-5"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        <ul className="space-y-3 mb-5 text-[14px] text-slate-600">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 leading-6">
              <span
                className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: project.accent }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium ${tagStyles[project.tagClass]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
            >
              <FiGithub size={14} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400">
              <FiGithub size={14} /> GitHub
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
            >
              <FiExternalLink size={14} /> Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400">
              <FiExternalLink size={14} /> Demo
            </span>
          )}

          <span className="ml-auto text-slate-400">
            <FiArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-20 px-6 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-600 text-xs font-semibold tracking-[0.35em] uppercase font-mono mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500">
              Work
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            A broader set of projects across AI, full stack engineering, distributed systems, and game development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}