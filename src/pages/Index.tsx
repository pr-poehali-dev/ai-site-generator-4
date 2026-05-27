import { useState } from "react";
import Icon from "@/components/ui/icon";

const BILLBOARD_IMG = "https://cdn.poehali.dev/projects/a0e02015-7de3-44c3-9299-43117a731d43/files/dfc65b0d-f52d-4e70-8bca-09e1dd6cf327.jpg";

const NAV_LINKS = [
  { label: "Проекты", href: "#projects" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Megaphone",
    title: "Наружная реклама",
    desc: "Билборды, баннеры, вывески, лайтбоксы — всё для максимальной видимости вашего бренда в городе.",
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50",
  },
  {
    icon: "Printer",
    title: "Широкоформатная печать",
    desc: "Печать баннеров, плакатов, наклеек и любых форматов на профессиональном оборудовании.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    icon: "Palette",
    title: "Дизайн и производство",
    desc: "Создаём яркие макеты и воплощаем их в жизнь — от идеи до готового изделия под ключ.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
];

const PORTFOLIO_ITEMS = [
  { title: "Наружная реклама", category: "Билборды", color: "from-cyan-500 to-blue-600" },
  { title: "Широкоформатная печать", category: "Печать", color: "from-violet-500 to-purple-700" },
  { title: "Дизайн и производство", category: "Дизайн", color: "from-pink-500 to-rose-600" },
  { title: "Вывески и лайтбоксы", category: "Производство", color: "from-amber-400 to-orange-500" },
  { title: "Брендирование транспорта", category: "Реклама", color: "from-emerald-400 to-teal-600" },
  { title: "Интерьерная реклама", category: "Дизайн", color: "from-blue-500 to-indigo-600" },
];

const STEPS = [
  { num: "01", icon: "MessageSquare", title: "Консультация", desc: "Обсуждаем задачи, цели и пожелания. Подбираем оптимальное рекламное решение." },
  { num: "02", icon: "PenTool", title: "Дизайн", desc: "Разрабатываем привлекательные макеты с учётом фирменного стиля вашего бренда." },
  { num: "03", icon: "Settings", title: "Производство", desc: "Изготавливаем рекламные материалы на собственном производстве." },
  { num: "04", icon: "MapPin", title: "Монтаж", desc: "Профессиональный монтаж и установка в согласованные сроки." },
];

const TESTIMONIALS = [
  {
    name: "Антон Сергеев",
    role: "Директор торговой сети",
    text: "Работаем с Камеей уже 3 года. Всегда в срок, качество на высоте. Рекомендую!",
    avatar: "АС",
    color: "bg-cyan-500",
  },
  {
    name: "Наталья Вот",
    role: "Маркетолог",
    text: "Приятно сотрудничать с командой профессионалов. Дизайн превзошёл все ожидания.",
    avatar: "НВ",
    color: "bg-violet-500",
  },
  {
    name: "Дмитрий Чернов",
    role: "Владелец ресторана",
    text: "Решил сменить вывеску и не ожидал такого результата. Клиенты сразу заметили!",
    avatar: "ДЧ",
    color: "bg-amber-500",
  },
];

const STATS = [
  { value: "15", suffix: " лет", label: "опыта" },
  { value: "1000", suffix: "+", label: "клиентов" },
  { value: "5000", suffix: "+", label: "проектов" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-golos">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-montserrat font-black text-sm">К</span>
              </div>
              <span className="font-montserrat font-black text-xl text-kamea-dark">Камея</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-golos text-gray-600 hover:text-kamea-cyan transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contacts")}
              className="hidden md:block btn-primary px-5 py-2 rounded-full text-sm"
            >
              Связаться с нами
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-gray-700 font-medium py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="btn-primary px-5 py-2 rounded-full text-sm w-fit"
            >
              Связаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${BILLBOARD_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Полный цикл рекламных решений
            </div>
            <h1 className="font-montserrat font-black text-5xl lg:text-6xl text-white leading-tight mb-6">
              Ваше сообщение,{" "}
              <span className="gradient-text">видимое всем.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Рекламное агентство «Камея» — создаём, производим и размещаем рекламу,
              которая работает на ваш бизнес.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Связаться с нами
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-8 py-3.5 rounded-full text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Наши проекты
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-montserrat font-black text-3xl gradient-text">
                    {stat.value}<span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative animate-float">
              <div className="w-80 h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img src={BILLBOARD_IMG} alt="Наружная реклама" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="font-montserrat font-black text-kamea-dark text-2xl">5000+</div>
                <div className="text-gray-500 text-xs">выполненных проектов</div>
              </div>
              <div className="absolute -top-4 -left-4 gradient-bg rounded-xl p-3 shadow-xl">
                <Icon name="Award" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kamea-cyan font-semibold uppercase tracking-widest text-sm mb-3">Что мы делаем</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`card-hover rounded-3xl p-8 ${svc.bg} border border-gray-100 cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={svc.icon} size={26} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-kamea-dark mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-kamea-cyan font-semibold text-sm group cursor-pointer">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kamea-cyan font-semibold uppercase tracking-widest text-sm mb-3">Наши работы</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Портфолио</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div key={i} className="card-hover rounded-2xl overflow-hidden cursor-pointer group">
                <div className={`bg-gradient-to-br ${item.color} h-48 md:h-56 flex flex-col justify-between p-6 relative`}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70 bg-white/20 px-3 py-1 rounded-full w-fit">
                    {item.category}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-bold text-white text-lg leading-tight">{item.title}</h3>
                    <div className="mt-3 flex items-center gap-1 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Смотреть <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Plus" size={16} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kamea-cyan font-semibold uppercase tracking-widest text-sm mb-3">Как мы работаем</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Процесс работы</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="card-hover bg-white rounded-3xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="font-montserrat font-black text-4xl gradient-text leading-none">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl gradient-bg-soft flex items-center justify-center">
                      <Icon name={step.icon} size={20} className="text-kamea-cyan" fallback="Circle" />
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-kamea-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shadow">
                      <Icon name="ChevronRight" size={14} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-kamea-cyan font-semibold uppercase tracking-widest text-sm mb-3">Что говорят клиенты</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/[0.08] backdrop-blur border border-white/10 rounded-3xl p-7 card-hover">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-montserrat font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-white">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">«{t.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-kamea-cyan font-semibold uppercase tracking-widest text-sm mb-3">Напишите нам</p>
              <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark mb-6">Контакты</h2>
              <p className="text-gray-500 mb-10 text-lg">
                Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение часа.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Phone", text: "+7 (800) 123-45-67", label: "Телефон" },
                  { icon: "Mail", text: "info@kameya.ru", label: "Email" },
                  { icon: "MapPin", text: "г. Москва, ул. Рекламная, 57", label: "Адрес" },
                  { icon: "Clock", text: "Пн–Пт: 9:00 – 18:00", label: "Время работы" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg-soft flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={20} className="text-kamea-cyan" fallback="Info" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                      <div className="text-kamea-dark font-medium">{c.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-montserrat font-bold text-xl text-kamea-dark mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1.5 block">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition text-kamea-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition text-kamea-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1.5 block">Задача</label>
                  <textarea
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition text-kamea-dark resize-none"
                  />
                </div>
                <button className="w-full btn-primary py-4 rounded-xl font-montserrat font-semibold text-base">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-kamea-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-montserrat font-black text-sm">К</span>
              </div>
              <span className="font-montserrat font-black text-xl text-white">Камея</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Facebook", label: "Facebook" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Send", label: "Telegram" },
              ].map((s) => (
                <div key={s.label} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name={s.icon} size={16} className="text-gray-300" fallback="Globe" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2024 Рекламное агентство «Камея». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
