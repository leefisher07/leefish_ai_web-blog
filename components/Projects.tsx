const projects = [
  {
    title: '性格与性压抑评测工具',
    description: '基于心理学理论的性格评测工具，帮助用户了解自己的性格特征和压抑状况。',
    tech: ['Python', 'AI', 'Data Analysis'],
    github: 'https://github.com/leefisher07/xhs-evalution',
    icon: '🧠',
  },
  {
    title: 'SRI计算问卷工具',
    description: '自我关系问卷计算工具，提供专业的心理评估和分析报告。',
    tech: ['Python', 'Statistics', 'Web'],
    github: 'https://github.com/leefisher07/sri-calculator-questionnaire',
    icon: '📊',
  },
  {
    title: '智能评语生成系统',
    description: '基于AI的学生评语自动生成系统，提高教师工作效率，个性化评语内容。',
    tech: ['AI', 'NLP', 'Education'],
    github: 'https://github.com/leefisher07/Intelligent-Comment-System',
    icon: '✍️',
  },
  {
    title: '学生成绩分析工具',
    description: '智能分析学生成绩数据，生成可视化报表，帮助教师掌握学生学习情况。',
    tech: ['Python', 'Data Viz', 'Analytics'],
    github: 'https://github.com/leefisher07/grade-analysis',
    icon: '📈',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          我的作品
        </h2>
        <p className="text-center text-secondary mb-12 text-lg">
          AI编程工具产品集
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{project.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-card text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 bg-text text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
