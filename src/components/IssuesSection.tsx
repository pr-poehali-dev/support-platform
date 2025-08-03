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
          <Badge variant="secondary" className="mb-4">Области работы</Badge>
          <h3 className="text-3xl font-bold font-heading mb-6">С какими запросами мы работаем</h3>
          <p className="text-lg text-muted-foreground">
            Помогаем парам и отдельным людям в различных ситуациях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <Card key={index} className="relationship-card hover-scale fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name={issue.icon} size={20} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{issue.title}</CardTitle>
                <CardDescription>{issue.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;