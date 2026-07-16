import { useParams } from 'react-router-dom'
import SOLUTION_DETAILS from '../data/solutionDetails.js'
import ComingSoon from './ComingSoon.jsx'
import DetailHero from '../components/solutions/detail/DetailHero.jsx'
import DetailOverview from '../components/solutions/detail/DetailOverview.jsx'
import DetailApplications from '../components/solutions/detail/DetailApplications.jsx'
import DetailBenefits from '../components/solutions/detail/DetailBenefits.jsx'
import DetailQuote from '../components/solutions/detail/DetailQuote.jsx'

function SolutionDetail() {
  const { slug } = useParams()
  const detail = SOLUTION_DETAILS[slug]

  if (!detail) return <ComingSoon />

  return (
    <>
      <DetailHero badge={detail.badge} title={detail.title} intro={detail.intro} image={detail.heroImage} />
      <DetailOverview {...detail.overview} />
      <DetailApplications {...detail.applications} />
      <DetailBenefits {...detail.benefits} />
      <DetailQuote {...detail.quote} />
    </>
  )
}

export default SolutionDetail
