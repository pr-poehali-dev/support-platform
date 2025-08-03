import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const IssuesSection = () => {
  const issues = [
    { icon: "AlertCircle", title: "Частые конфликты", description: "Помогаем находить причины разногласий и учиться договариваться" },
    { icon: "Snowflake", title: "Эмоциональный холод", description: "Работаем с отдалением и возвращаем тепло в отношения" },
    { icon: "HeartHandshake", title: "Желание близости", description: "Развиваем навыки эмоциональной интимности и понимания" },
    { icon: "Clock", title: "Неразрешённые обиды", description: "Учимся прощать и двигаться дальше без груза прошлого" },
    { icon: "Shield", title: "Страх расставания", description: "Работаем с тревогами и укрепляем доверие в паре" },
    { icon: "Compass", title: "Потеря направления", description: "Помогаем найти общие цели и ценности в отношениях" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            🔥 Области работы
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
            С какими запросами мы работаем
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Помогаем парам и отдельным людям в сложных жизненных ситуациях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
              <CardHeader className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={issue.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">{issue.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">{issue.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;