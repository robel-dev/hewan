# Hewan's Event - Professional Event Planning Website

A modern, multilingual event planning website built with Next.js 15, featuring elegant design, comprehensive service management, and automated booking systems.

🌐 **Live Demo**: [https://hewan-test.vercel.app/en](https://hewan-test.vercel.app/en)

## 🎯 Overview

Hewan's Event is a professional event planning company website that showcases their services for weddings, celebrations, corporate events, and special occasions in Stockholm. The website features a sophisticated design with multilingual support and integrated automation systems.

## ✨ Key Features

### 🌍 Multilingual Support
- **3 Languages**: English, Swedish, and Tigrinya
- Dynamic language switching with preserved routing
- Culturally appropriate translations and typography
- Special font support for Tigrinya (Geez script)

### 📱 Responsive Design
- Mobile-first approach with optimized mobile navigation
- Elegant desktop experience with hover effects
- Professional service cards with enhanced visual feedback
- Smooth animations and transitions

### 🎨 Modern UI/UX
- **Glassmorphism effects** on hero sections
- **Dynamic header** that adapts to scroll position and page context
- **Service cards** with hover effects and shadow enhancements
- **Professional typography** with custom font families
- **Image optimization** with Next.js Image component

### 🛠 Service Management
Current services include:
- **Weddings and Ceremonies** - Complete wedding planning and coordination
- **Venue Rental for Festivities & Events** - Professional event spaces
- **Catering Services** - Exquisite culinary experiences
- **Birthday Parties** - Custom themed celebrations
- **High School Graduation (Studenten)** - Academic milestone celebrations
- **Wedding Anniversaries** - Romantic anniversary celebrations
- **Baptism Services** - Sacred ceremony planning
- **Memorials & Funerals** - Compassionate memorial services

### 🤖 Automation & Integrations

#### Google Apps Script Integration
- Automated form submission to Google Sheets
- Real-time data processing and storage
- Email notifications for new inquiries
- Calendar integration for event scheduling

#### Contact Form System
- **Multi-step form** with progress indication
- **Smart validation** and error handling
- **Success/Error notifications** with toast system
- **Auto-save** form data in localStorage
- **Comprehensive fields**: Basic info, budget, dietary requirements, venue preferences

#### Email Automation
- Automated inquiry responses
- Booking confirmations and follow-ups
- Service information delivery
- Client communication workflows

### 📊 Business Features
- **Partner showcase** with trusted industry collaborators
- **Client testimonials** with social proof
- **Instagram integration** with live social feed
- **Gallery system** with professional event photography
- **Service portfolio** with detailed descriptions

## 🚀 Technical Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **next-intl** - Internationalization
- **Radix UI** - Accessible component primitives
- **Lucide React** - Modern icon system

### Styling & UI
- **Custom CSS** with Tailwind utilities
- **Responsive grid systems**
- **CSS animations** and transitions
- **Custom font loading** (Noto Sans Ethiopic for Tigrinya)
- **Toast notifications** for user feedback

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Package management

## 📁 Project Structure

```
hewans-event/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── gallery/       # Gallery page
│   │   ├── services/      # Services page
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Homepage
│   ├── i18n/              # Internationalization config
│   │   ├── locales/       # Translation files
│   │   │   ├── en.json    # English translations
│   │   │   ├── sv.json    # Swedish translations
│   │   │   └── ti.json    # Tigrinya translations
│   │   ├── config.ts      # i18n configuration
│   │   └── request.ts     # i18n request handler
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Button component
│   │   ├── input.tsx      # Input component
│   │   ├── toast.tsx      # Toast notification
│   │   ├── toaster.tsx    # Toast container
│   │   └── ...           # Other UI components
│   ├── header.tsx         # Navigation header
│   ├── service-card.tsx   # Service display cards
│   ├── contact-form.tsx   # Multi-step contact form
│   ├── gallery-preview.tsx # Gallery component
│   └── ...               # Other components
├── hooks/
│   └── use-toast.ts       # Toast notification hook
├── lib/
│   └── utils.ts          # Utility functions
├── public/
│   ├── images/           # Static images
│   ├── fonts/            # Custom fonts
│   ├── videos/           # Media assets
│   └── hewan-photos/     # Event photography
└── styles/
    └── globals.css       # Additional global styles
```

## 🎨 Design Features

### Visual Elements
- **Hero sections** with background images and overlay effects
- **Service cards** with hover animations and improved contrast
- **Partner logos** in carousel format
- **Instagram feed** integration
- **Professional photography** showcase

### Mobile Experience
- **Hamburger menu** with full-screen overlay
- **Touch-optimized** navigation
- **Service submenu** for easy mobile browsing
- **Consistent white background** for mobile menu
- **Independent mobile menu** outside header stacking context

### Accessibility
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus management** for interactive elements
- **Color contrast** optimization

## 🌐 Internationalization

### Language Support
- **English (en)** - Primary language
- **Swedish (sv)** - Local market language
- **Tigrinya (ti)** - Community language with custom fonts

### Features
- **Dynamic routing** with locale prefixes (`/en`, `/sv`, `/ti`)
- **Language switcher** in header
- **Preserved navigation** when switching languages
- **Cultural adaptations** in content and typography

## 📧 Contact & Automation

### Google Apps Script Integration
- **Form submissions** automatically saved to Google Sheets
- **Email notifications** sent to business owner
- **Data validation** and processing
- **Error handling** and retry mechanisms

### Form Features
- **Multi-step process** (Basic Info → Additional Details)
- **Calendar date picker** for event dates
- **Service type selection** dropdown
- **Budget and guest count** fields
- **Dietary requirements** and venue preferences
- **Success/Error notifications** with toast system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Google Apps Script setup (for form submissions)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hewans-event.git

# Navigate to project directory
cd hewans-event

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Google Apps Script Configuration
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
NEXT_PUBLIC_GOOGLE_DEPLOYMENT_ID=YOUR_DEPLOYMENT_ID

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Additional Google API Configuration
GOOGLE_CALENDAR_API_KEY=your_calendar_api_key
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret

# Optional: Email Configuration (if using SMTP)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

### Google Apps Script Setup

1. Create a new Google Apps Script project
2. Set up a Google Sheet to receive form submissions
3. Deploy the script as a web app
4. Copy the deployment URL to your environment variables

Example Google Apps Script code:
```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add form data to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.eventType,
      data.date,
      data.message,
      data.budget,
      data.guestCount
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}));
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}));
  }
}
```

## 📱 Mobile Optimization

### Performance Features
- **Image optimization** with Next.js Image
- **Lazy loading** for improved performance
- **Code splitting** for faster load times
- **SEO optimization** with proper meta tags

### Mobile-Specific Enhancements
- **Touch gestures** for gallery navigation
- **Optimized forms** for mobile input
- **Fast loading** with optimized assets
- **Progressive Web App** capabilities

## 🎯 Business Impact

### Client Experience
- **Professional presentation** of services
- **Easy booking process** with automation
- **Multi-language accessibility** for diverse clientele
- **Social proof** through testimonials and gallery

### Operational Efficiency
- **Automated lead capture** and processing
- **Google Sheets integration** for data management
- **Email workflows** for client communication
- **Partner showcase** for business relationships

## 🔧 Customization

The website is built with modularity in mind:

### Adding New Services
1. Update translation files (`app/i18n/locales/*.json`)
2. Add service to header navigation (`components/header.tsx`)
3. Update services page (`app/[locale]/services/page.tsx`)

### Modifying Styling
- **Tailwind CSS** classes for quick styling changes
- **CSS custom properties** for theme customization
- **Component-based** architecture for easy modifications

### Language Support
- Add new locale to `app/i18n/config.ts`
- Create translation file in `app/i18n/locales/`
- Update language switcher in header

## 📈 Future Enhancements

- **Online booking system** with payment integration
- **Client portal** for event management
- **Advanced analytics** and reporting
- **CRM integration** for customer management
- **Multi-location support** for business expansion
- **Real-time chat** support
- **Event gallery** with client uploads

## 🛠 Development Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
pnpm type-check   # Run TypeScript compiler

# Deployment
pnpm deploy       # Deploy to Vercel (if configured)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain accessibility standards
- Add translations for new text content
- Test on mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Hewan's Event**
- Website: [https://hewan-test.vercel.app/en](https://hewan-test.vercel.app/en)
- Email: info@hewansevent.com
- Instagram: [@hewans_events](https://instagram.com/hewans_events)
- Location: Stockholm, Sweden

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons

---

*Built with ❤️ using Next.js 15 and modern web technologies*

## 📊 Project Stats

- **Languages**: 3 (English, Swedish, Tigrinya)
- **Pages**: 5 main pages + dynamic routing
- **Components**: 20+ reusable components
- **Services**: 8 different event services
- **Responsive**: Mobile-first design
- **Performance**: Optimized for speed and SEO
