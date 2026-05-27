import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/a0e02015-7de3-44c3-9299-43117a731d43/bucket/d1b3e865-d359-4c05-93ae-b64a7b53bb20.png";
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
    accent: "#00AEEF",
    bg: "#E8F4FC",
  },
  {
    icon: "Printer",
    title: "Широкоформатная печать",
    desc: "Печать баннеров, плакатов, наклеек и любых форматов на профессиональном оборудовании.",
    accent: "#EC008C",
    bg: "#FDE8F4",
  },
  {
    icon: "Palette",
    title: "Дизайн и производство",
    desc: "Создаём яркие макеты и воплощаем их в жизнь — от идеи до готового изделия под ключ.",
    accent: "#0072BC",
    bg: "#EAF3FB",
  },
];

const PORTFOLIO_ITEMS = [
  { title: "Наружная реклама", category: "Билборды", from: "#0072BC", to: "#00AEEF" },
  { title: "Широкоформатная печать", category: "Печать", from: "#EC008C", to: "#FF6BB5" },
  { title: "Дизайн и производство", category: "Дизайн", from: "#0072BC", to: "#003F7F" },
  { title: "Вывески и лайтбоксы", category: "Производство", from: "#00AEEF", to: "#0072BC" },
  { title: "Брендирование транспорта", category: "Реклама", from: "#EC008C", to: "#0072BC" },
  { title: "Интерьерная реклама", category: "Дизайн", from: "#003F7F", to: "#00AEEF" },
];

const STEPS = [
  { num: "01", icon: "MessageSquare", title: "Консультация", desc: "Обсуждаем задачи, цели и пожелания. Подбираем оптимальное рекламное решение.", color: "#00AEEF" },
  { num: "02", icon: "PenTool", title: "Дизайн", desc: "Разрабатываем привлекательные макеты с учётом фирменного стиля вашего бренда.", color: "#EC008C" },
  { num: "03", icon: "Settings", title: "Производство", desc: "Изготавливаем рекламные материалы на собственном производстве.", color: "#0072BC" },
  { num: "04", icon: "MapPin", title: "Монтаж", desc: "Профессиональный монтаж и установка в согласованные сроки.", color: "#1A2035" },
];

const TESTIMONIALS = [
  {
    name: "Антон Сергеев",
    role: "Директор торговой сети",
    text: "Работаем с Камеей уже 3 года. Всегда в срок, качество на высоте. Рекомендую!",
    avatar: "АС",
    color: "#0072BC",
  },
  {
    name: "Наталья Вот",
    role: "Маркетолог",
    text: "Приятно сотрудничать с командой профессионалов. Дизайн превзошёл все ожидания.",
    avatar: "НВ",
    color: "#EC008C",
  },
  {
    name: "Дмитрий Чернов",
    role: "Владелец ресторана",
    text: "Решил сменить вывеску и не ожидал такого результата. Клиенты сразу заметили!",
    avatar: "ДЧ",
    color: "#00AEEF",
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <img src={LOGO_URL} alt="Камея" className="h-10 w-auto" />

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-600 hover:text-[#0072BC] transition-colors font-medium text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contacts")}
              className="hidden md:block btn-primary px-5 py-2.5 rounded-full text-sm"
            >
              Связаться с нами
            </button>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
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
      <section className="relative pt-[72px] min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2035 0%, #003366 50%, #0072BC 100%)" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${BILLBOARD_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,32,53,0.97) 40%, rgba(0,114,188,0.5) 100%)" }} />

        {/* CMYK декоративные круги */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10" style={{ background: "#00AEEF", filter: "blur(60px)" }} />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full opacity-10" style={{ background: "#EC008C", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 bg-white/10 backdrop-blur text-white/80">
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              Полный цикл рекламных решений
            </div>
            <h1 className="font-montserrat font-black text-5xl lg:text-6xl text-white leading-tight mb-6">
              Ваше сообщение,{" "}
              <span style={{ color: "#00AEEF" }}>видимое всем.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Рекламное агентство «Камея» — создаём, производим и размещаем рекламу,
              которая работает на ваш бизнес.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="btn-primary px-8 py-3.5 rounded-full text-base"
              >
                Связаться с нами
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-8 py-3.5 rounded-full text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors font-montserrat"
              >
                Наши проекты
              </button>
            </div>

            <div className="flex flex-wrap gap-10 mt-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-montserrat font-black text-3xl text-white">
                    {stat.value}<span className="text-2xl" style={{ color: "#00AEEF" }}>{stat.suffix}</span>
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
                <div className="font-montserrat font-black text-[#0072BC] text-2xl">5000+</div>
                <div className="text-gray-500 text-xs">выполненных проектов</div>
              </div>
              <div className="absolute -top-4 -left-4 rounded-xl p-3 shadow-xl" style={{ background: "#0072BC" }}>
                <Icon name="Award" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* CMYK цветные полоски снизу */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          <div className="flex-1" style={{ background: "#00AEEF" }} />
          <div className="flex-1" style={{ background: "#EC008C" }} />
          <div className="flex-1" style={{ background: "#FFF200" }} />
          <div className="flex-1" style={{ background: "#231F20" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#0072BC" }}>Что мы делаем</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="card-hover rounded-3xl p-8 border border-gray-100 cursor-pointer"
                style={{ background: svc.bg }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ background: svc.accent }}
                >
                  <Icon name={svc.icon} size={26} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-kamea-dark mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-sm cursor-pointer" style={{ color: svc.accent }}>
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
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#0072BC" }}>Наши работы</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Портфолио</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div key={i} className="card-hover rounded-2xl overflow-hidden cursor-pointer group">
                <div
                  className="h-48 md:h-56 flex flex-col justify-between p-6 relative"
                  style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/80 bg-white/20 px-3 py-1 rounded-full w-fit">
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
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#0072BC" }}>Как мы работаем</p>
            <h2 className="section-title text-4xl lg:text-5xl text-kamea-dark">Процесс работы</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="card-hover bg-white rounded-3xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="font-montserrat font-black text-4xl leading-none" style={{ color: step.color }}>
                      {step.num}
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.color}18` }}
                    >
                      <Icon name={step.icon} size={20} fallback="Circle" style={{ color: step.color }} />
                    </div>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-kamea-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shadow" style={{ background: "#0072BC" }}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2035 0%, #003366 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        {/* CMYK dots decoration */}
        <div className="absolute top-10 left-10 flex gap-3 opacity-30">
          {["#00AEEF", "#EC008C", "#FFF200", "#fff"].map((c) => (
            <div key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#00AEEF" }}>Что говорят клиенты</p>
            <h2 className="section-title text-4xl lg:text-5xl text-white">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/[0.07] backdrop-blur border border-white/10 rounded-3xl p-7 card-hover">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    <span className="text-white font-montserrat font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-white">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#FFF200" }} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">«{t.text}»</p>
              </div>
            ))}
          </div>
        </div>

        {/* CMYK нижняя полоса */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          <div className="flex-1" style={{ background: "#00AEEF" }} />
          <div className="flex-1" style={{ background: "#EC008C" }} />
          <div className="flex-1" style={{ background: "#FFF200" }} />
          <div className="flex-1" style={{ background: "#231F20" }} />
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#0072BC" }}>Напишите нам</p>
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
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#E8F4FC" }}
                    >
                      <Icon name={c.icon} size={20} fallback="Info" style={{ color: "#0072BC" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                      <div className="text-kamea-dark font-medium">{c.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <img src={LOGO_URL} alt="Камея" className="h-12 w-auto opacity-80" />
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 transition text-kamea-dark"
                    style={{ "--tw-ring-color": "#0072BC" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 transition text-kamea-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1.5 block">Задача</label>
                  <textarea
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 transition text-kamea-dark resize-none"
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
      <footer style={{ background: "#1A2035" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={LOGO_URL} alt="Камея" className="h-10 w-auto brightness-0 invert" />
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
          {/* CMYK полоска */}
          <div className="flex h-0.5 mt-8 mb-6 rounded-full overflow-hidden">
            <div className="flex-1" style={{ background: "#00AEEF" }} />
            <div className="flex-1" style={{ background: "#EC008C" }} />
            <div className="flex-1" style={{ background: "#FFF200" }} />
            <div className="flex-1" style={{ background: "#aaa" }} />
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2024 Рекламное агентство «Камея». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
