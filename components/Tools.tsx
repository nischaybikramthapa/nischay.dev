import {
  SiDbt,
  SiAwslambda,
  SiSnowflake,
  SiAmazondynamodb,
  SiAmazonecs,
  SiAmazonredshift,
  SiAmazons3,
  SiAmazonsqs,
  SiApacheflink,
  SiApachekafka,
  SiGithubactions,
  SiDvc,
  SiMlflow,
  SiPython,
  SiR,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiAmazonapigateway,
  SiAmazonaws,
  SiAmazoncloudwatch,
  SiPandas,
  SiPolars,
  SiPlotly,
  SiJupyter,
  SiKubernetes,
  SiFlask,
  SiSpacy,
  SiApacheairflow,
  SiApachespark,
  SiApacheparquet,
  SiApachehive,
  SiOpenai,
  SiStreamlit,
  SiBentoml,
  SiJira,
  SiNextdotjs,
  SiWeightsandbiases,
  SiOpensearch,
  SiDiagramsdotnet,
  SiMicrosoftteams,
  SiMicrosoftoffice,
  SiMicrosoftpowerpoint,
  SiPowerbi,
  SiPowershell,
  SiTableau,
  SiInformatica,
  SiConfluence

} from 'react-icons/si'

const size = 34
const techStackMap = {
  dbt: <SiDbt color="#C81D25" size={size} />,
  awslambda: <SiAwslambda color="#F49D37" size={size} />,
  snowflake: <SiSnowflake color="cyan" size={size} />,
  S3: <SiAmazons3 color="#C81D25" size={size} />,
  kafka: <SiApachekafka className='black dark:white' size={size} />,
  flink: <SiApacheflink color="#e6526f" size={size} />,
  redshift: <SiAmazonredshift color="#4E75EF" size={size} />,
  ECS: <SiAmazonecs color="#F49D37" size={size} />,
  dynamodb: <SiAmazondynamodb color="#4E75EF" size={size} />,
  ghactions: <SiGithubactions color="#4E75EF" size={size} />,
  sqs: <SiAmazonsqs color="#e6526f" size={size} />,
  dvc: <SiDvc color="green" size={size} />,
  mlflow: <SiMlflow color="purple" size={size} />,
  python: <SiPython color="#4B8BBE" size={size} />,
  R: <SiR color="#4E75EF" size={size} />,
  pytorch: <SiPytorch color="#F49D37" size={size} />,
  tensorflow: <SiTensorflow color="#C81D25" size={size} />,
  sklearn: <SiScikitlearn color="#F49D37" size={size} />,
  fastapi: <SiFastapi color="gray" size={size} />,
  apigateway: <SiAmazonapigateway color="#F49D37" size={size} />,
  aws: <SiAmazonaws color="#F49D37" size={size} />,
  cloudwatch: <SiAmazoncloudwatch color="#F49D37" size={size} />,
  pandas: <SiPandas color="#4E75EF" size={size} />,
  polars: <SiPolars color="#4E75EF" size={size} />,
  plotly: <SiPlotly color="purple" size={size} />,
  jupyter: <SiJupyter color="#F49D37" size={size} />,
  kubernetes: <SiKubernetes color="#4E75EF" size={size} />,
  flask: <SiFlask color="black" size={size} />,
  spacy: <SiSpacy color="#4E75EF" size={size} />,
  airflow: <SiApacheairflow className='#4E75EF dark:white' size={size} />,
  spark: <SiApachespark color="#C81D25" size={size} />,
  parquet: <SiApacheparquet className='black dark:white' size={size} />,
  hive: <SiApachehive className='black dark:white' size={size} />,
  openai: <SiOpenai color="green" size={size} />,
  streamlit: <SiStreamlit color="#C81D25" size={size} />,
  bentoml: <SiBentoml color="#C81D25" size={size} />,
  jira: <SiJira color="#0146b3" size={size} />,
  nextjs: <SiNextdotjs color="black" size={size} />,
  wandb: <SiWeightsandbiases color="#F49D37" size={size} />,
  opensearch: <SiOpensearch color="#4E75EF" size={size} />,
  diagrams: <SiDiagramsdotnet color="#F49D37" size={size} />,
  teams: <SiMicrosoftteams color="#464EB8" size={size} />,
  office: <SiMicrosoftoffice color="#B1191B" size={size} />,
  powerpoint: <SiMicrosoftpowerpoint color="#C81D25" size={size} />,
  powerbi: <SiPowerbi color="#F49D37" size={size} />,
  powershell: <SiPowershell color="#4E75EF" size={size} />,
  tableau: <SiTableau color="green" size={size} />,
  informatica: <SiInformatica color="white" size={size} />,
  confluence: <SiConfluence color="#0146b3" size={size} />,
}

export const getTechIcon = (tech) => {
  return techStackMap[tech] || null
}

interface Feature {
  techStack: string[]
}

export const TechStack = ({ feature }: { feature: Feature }) => {
  const iconsPerRow = 7

  const renderIcons = () => {
    const iconElements = feature.techStack.map((item, index) => (
      <div key={index} className="mr-4">
        {getTechIcon(item)}
      </div>
    ))

    const rows: JSX.Element[] = [];
    for (let i = 0; i < iconElements.length; i += iconsPerRow) {
      rows.push(
        <div key={i} className="flex items-center mb-4">
          {iconElements.slice(i, i + iconsPerRow)}
        </div>
      )
    }

    return rows
  };

  return <div>{renderIcons()}</div>
}