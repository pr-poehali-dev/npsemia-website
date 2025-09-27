import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const sections = [
    { id: 'main', title: 'Главная', icon: 'Home' },
    { id: 'about', title: 'О проекте', icon: 'Info' },
    { id: 'programs', title: 'Программы поддержки', icon: 'Heart' },
    { id: 'services', title: 'Услуги для семей', icon: 'Users' },
    { id: 'contacts', title: 'Контакты', icon: 'Phone' }
  ];

  const programs = [
    {
      title: 'Материнский капитал',
      description: 'Государственная поддержка семей при рождении или усыновлении ребенка',
      amount: '630 047 ₽',
      icon: 'Baby',
      color: 'bg-primary'
    },
    {
      title: 'Ежемесячные выплаты',
      description: 'Пособия на детей до 3 лет для семей с низким доходом',
      amount: 'до 18 000 ₽',
      icon: 'Calendar',
      color: 'bg-secondary'
    },
    {
      title: 'Льготная ипотека',
      description: 'Льготное кредитование на жилье для семей с детьми',
      amount: '6% годовых',
      icon: 'Home',
      color: 'bg-accent'
    },
    {
      title: 'Детские сады',
      description: 'Обеспечение местами в дошкольных образовательных учреждениях',
      amount: '100% охват',
      icon: 'GraduationCap',
      color: 'bg-warm-orange'
    }
  ];

  const services = [
    {
      title: 'Консультации психолога',
      description: 'Семейное консультирование и поддержка',
      icon: 'Heart'
    },
    {
      title: 'Правовая помощь',
      description: 'Юридическая поддержка в семейных вопросах',
      icon: 'Scale'
    },
    {
      title: 'Курсы для родителей',
      description: 'Образовательные программы по воспитанию детей',
      icon: 'BookOpen'
    },
    {
      title: 'Центры семьи',
      description: 'Комплексная поддержка и досуг для всей семьи',
      icon: 'Building'
    }
  ];

  const renderMainSection = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-16 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Национальный проект<br />
            <span className="text-primary">«Семья»</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Поддержка российских семей — наш приоритет
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full"
              onClick={() => setActiveSection('programs')}
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Узнать о программах
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-4 rounded-full"
              onClick={() => setActiveSection('services')}
            >
              <Icon name="Users" className="mr-2" size={20} />
              Получить услуги
            </Button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-warm-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-warm-mint/20 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { number: '10 млн+', text: 'семей получили поддержку', icon: 'Users' },
          { number: '85%', text: 'рост рождаемости в регионах', icon: 'TrendingUp' },
          { number: '2 трлн ₽', text: 'выделено на программы', icon: 'Banknote' }
        ].map((stat, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name={stat.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );

  const renderAboutSection = () => (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">О национальном проекте «Семья»</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Национальный проект «Семья» направлен на создание условий для повышения рождаемости, 
          поддержку семей и обеспечение качественной жизни детей в России.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 border-0 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Icon name="Target" size={24} className="text-white" />
            </div>
            <CardTitle className="font-heading text-2xl text-gray-800">Наша цель</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Создание благоприятных условий для жизнедеятельности семьи, рождения и воспитания детей, 
              реализации молодежью жизненных планов, связанных с получением образования, 
              профессиональной деятельностью, созданием семьи.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Icon name="Calendar" size={24} className="text-white" />
            </div>
            <CardTitle className="font-heading text-2xl text-gray-800">Сроки реализации</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Проект реализуется с 2019 по 2030 год. За это время планируется охватить поддержкой 
              миллионы российских семей и создать устойчивую систему семейной политики в стране.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-8 border-0 bg-gradient-to-br from-accent/5 to-accent/10">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Award" size={28} className="text-white" />
          </div>
          <CardTitle className="font-heading text-3xl text-gray-800">Основные достижения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-heading text-2xl font-bold text-primary mb-2">630 047 ₽</h4>
              <p className="text-gray-600">размер материнского капитала в 2024 году</p>
            </div>
            <div>
              <h4 className="font-heading text-2xl font-bold text-secondary mb-2">85%</h4>
              <p className="text-gray-600">детей до 3 лет обеспечены местами в яслях</p>
            </div>
            <div>
              <h4 className="font-heading text-2xl font-bold text-accent mb-2">6%</h4>
              <p className="text-gray-600">льготная ставка по семейной ипотеке</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProgramsSection = () => (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">Программы поддержки семей</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Комплексная государственная поддержка российских семей на всех этапах жизни
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <CardHeader className={`${program.color} text-white p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name={program.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                    <p className="text-lg font-semibold opacity-90">{program.amount}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
              <Button 
                variant="outline" 
                className="mt-4 w-full group-hover:bg-gray-50 transition-colors"
              >
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">Услуги для семей</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Получите профессиональную поддержку и консультации по всем вопросам семейной жизни
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center p-6 border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={service.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-4 text-primary hover:text-primary/80"
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
        <CardContent className="pt-6">
          <h3 className="font-heading text-2xl font-bold mb-4">Нужна помощь?</h3>
          <p className="text-lg mb-6 opacity-90">
            Наши специалисты готовы проконсультировать вас по всем вопросам семейной поддержки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContactsSection = () => (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl font-bold text-gray-800 mb-6">Контакты</h2>
        <p className="text-xl text-gray-600">
          Свяжитесь с нами для получения поддержки и консультаций
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 border-0 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-6">
            <CardTitle className="font-heading text-2xl text-gray-800 flex items-center">
              <Icon name="Phone" className="mr-3 text-primary" size={24} />
              Горячая линия
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Федеральный номер:</h4>
              <p className="text-xl font-bold text-primary">8-800-200-0-200</p>
              <p className="text-gray-600 text-sm">Круглосуточно, бесплатно</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Региональная поддержка:</h4>
              <p className="text-lg font-semibold text-secondary">122</p>
              <p className="text-gray-600 text-sm">Короткий номер для вашего региона</p>
            </div>
          </CardContent>
        </Card>

        <Card className="p-8 border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader className="pb-6">
            <CardTitle className="font-heading text-2xl text-gray-800 flex items-center">
              <Icon name="Globe" className="mr-3 text-secondary" size={24} />
              Онлайн-сервисы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Icon name="ExternalLink" className="mr-3" size={20} />
              Госуслуги
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              <Icon name="MessageSquare" className="mr-3" size={20} />
              Онлайн-чат
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Icon name="Mail" className="mr-3" size={20} />
              Электронная почта
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="p-8 text-center border-0 bg-gradient-to-br from-accent/5 to-accent/10">
        <CardContent className="pt-6">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="MapPin" size={28} className="text-white" />
          </div>
          <h3 className="font-heading text-2xl text-gray-800 mb-4">Центры семейной поддержки</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            В каждом регионе работают центры семейной поддержки, где вы можете получить 
            персональную консультацию и помощь по всем программам проекта
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            <Icon name="Search" className="mr-2" size={20} />
            Найти ближайший центр
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return renderAboutSection();
      case 'programs': return renderProgramsSection();
      case 'services': return renderServicesSection();
      case 'contacts': return renderContactsSection();
      default: return renderMainSection();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setActiveSection('main')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading text-xl font-bold text-gray-800">NPsemia</h1>
                <p className="text-sm text-gray-600">Национальный проект «Семья»</p>
              </div>
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 transition-all ${
                    activeSection === section.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span className="hidden sm:inline">{section.title}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
                <span className="font-heading text-lg font-bold">NPsemia</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Национальный проект «Семья» — государственная поддержка и развитие семейных ценностей в России.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                {sections.slice(1).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="block text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Горячая линия: 8-800-200-0-200</p>
                <p>Короткий номер: 122</p>
                <p>Работаем круглосуточно</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Национальный проект «Семья». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;