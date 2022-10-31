import { createRouter, createWebHashHistory } from 'vue-router'
import ArticlesPage from '../views/ArticlesPage.vue'
import BlankPage from '../views/BlankPage.vue'
import CeoMessagePage from '../views/CeoMessagePage.vue'
import ConditionPage from '../views/ConditionPage.vue'
import ConsultServicePage from '../views/ConsultServicePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ContractPage from '../views/ContractPage.vue'
import DepoCompassPage from '../views/DepoCompassPage.vue'
import DepoDigestPage from '../views/DepoDigestPage.vue'
import DepoInfoPage from '../views/DepoInfoPage.vue'
import DepoServicePage from '../views/DepoServicePage.vue'
import DepoVestnikPage from '../views/DepoVestnikPage.vue'
import EnternalAuditPage from '../views/EnternalAuditPage.vue'
import EvotePage from '../views/EvotePage.vue'
import ExecutiveBodyPage from '../views/ExecutiveBodyPage.vue'
import FinancialReportPage from '../views/FinancialReportPage.vue'
import FunctionPage from '../views/FunctionPage.vue'
import FundPage from '../views/FundPage.vue'
import HomePage from '../views/HomePage'
import HeadlinerPage from '../views/HeadlinerPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import IsinAndCfiPage from '../views/IsinAndCfiPage.vue'
import ItServicePage from '../views/ItServicePage.vue'
import MediaPage from '../views/MediaPage.vue'
import MembershipPage from '../views/MembershipPage.vue'
import NewsPage from '../views/NewsPage.vue'
import OnlineReportPage from '../views/OnlineReportPage.vue'
import PressReleasePage from '../views/PressReleasePage.vue'
import PressSecretaryPage from '../views/PressSecretaryPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import QuestionnairePage from '../views/QuestionnairePage.vue'
import RegulationPage from '../views/RegulationPage.vue'
import RegulatoryDocumentPage from '../views/RegulatoryDocumentPage.vue'
import ReviewPage from '../views/ReviewPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import StatisticalInformationPage from '../views/StatisticaInformationPage.vue'
import StructurePage from '../views/StructurePage.vue'
import SupervisoryBoardPage from '../views/SupervisoryBoardPage.vue'
import TarifPage from '../views/TarifPage.vue'
import TechnicalSupportPage from '../views/TechnicalSupportPage.vue'
import VacancyPage from '../views/VacancyPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesPage
  }
  ,
  {
    path: '/blanks',
    name: 'blanks',
    component: BlankPage
  },
  {
    path: '/ceoMessage',
    name: 'ceoMessage',
    component: CeoMessagePage
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: ConditionPage
  },
  {
    path: '/consultService',
    name: 'consultService',
    component: ConsultServicePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactPage
  },
  {
    path: '/contracts',
    name: 'contracts',
    component: ContractPage
  },
  {
    path: '/depoCompass',
    name: 'depoCompass',
    component: DepoCompassPage
  },
  {
    path: '/depoDigest',
    name: 'depoDigest',
    component: DepoDigestPage
  },
  {
    path: '/depoInfo',
    name: 'depoInfo',
    component: DepoInfoPage
  },
  {
    path: '/depoService',
    name: 'depoService',
    component: DepoServicePage
  },
  {
    path: '/depoVestnik',
    name: 'depoVestnik',
    component: DepoVestnikPage
  },
  {
    path: '/enternalAudit',
    name: 'enternalAudit',
    component: EnternalAuditPage
  },
  {
    path: '/eVote',
    name: 'eVote',
    component: EvotePage
  },
  {
    path: '/executiveBody',
    name: 'executiveBody',
    component: ExecutiveBodyPage
  },
  {
    path: '/financialReport',
    name: 'financialReport',
    component: FinancialReportPage
  },
  {
    path: '/function',
    name: 'function',
    component: FunctionPage
  },
  {
    path: '/fund',
    name: 'fund',
    component: () => FundPage
  },
  {
    path: '/headliners',
    name: 'headliners',
    component: HeadlinerPage
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage
  },
  {
    path: '/isinAndcfi',
    name: 'isinAndcfi',
    component: IsinAndCfiPage
  },
  {
    path: '/itService',
    name: 'itService',
    component: ItServicePage
  },
  {
    path: '/media',
    name: 'media',
    component: MediaPage
  },
  {
    path: '/membership',
    name: 'membership',
    component: MembershipPage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path: '/onlineReport',
    name: 'onlineReport',
    component: OnlineReportPage
  },
  {
    path: '/pressRelease',
    name: 'pressRelease',
    component: PressReleasePage
  },
  {
    path: '/pressSecretary',
    name: 'pressSecretary',
    component: PressSecretaryPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: QuestionnairePage
  },
  {
    path: '/regulation',
    name: 'regulation',
    component: RegulationPage
  },
  {
    path: '/regulatory',
    name: 'regulatory',
    component: RegulatoryDocumentPage
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewPage
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage
  },
  {
    path: '/statisticalInformation',
    name: 'statisticalInformation',
    component: StatisticalInformationPage
  },
  {
    path: '/supervisoryBoard',
    name: 'supervisoryBoard',
    component: SupervisoryBoardPage
  },
  {
    path: '/structure',
    name: 'structure',
    component: StructurePage
  },
  {
    path: '/tarifPage',
    name: 'tarifPage',
    component: TarifPage
  },
  {
    path: '/technicalSupport',
    name: 'technicalSupport',
    component: TechnicalSupportPage
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: VacancyPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
