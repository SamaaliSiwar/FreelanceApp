import StatusCard from 'components/landing/StatusCard';

import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
 return (
    <>
    
    <div className="flex ">
                    <StatusCard color="red" icon="stars" title="Travailler en freelance, un synonyme de liberté">
                    Travailler en freelance permet de gagner en avantage,
                     parmi eux on retrouve principalement l’autonomie et l’indépendance. En effet,
                     travailler en freelance demande une grande organisation et permet de gérer 
                     soi-même sa petite entreprise.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Free Revisions"
                    >
                       En choisissant de travailler en freelance, 
                       il est possible de définir ses propres tarifs ainsi que ses horaires de travail.
                        Travailler en freelance implique de gérer une mission du début à la fin.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        Le recours à un freelance devient de plus en plus la solution numéro 1 des entreprises lors d’un pic d’activité temporaire. 
                     Plus simple à mettre en place qu’un CDD et moins contraignant qu’un CDI,
                      le recours à un freelance permet d’avoir accès à une main d’ouvre ultra-qualifiée à un tarif que vous négociez vous-même.
                    </StatusCard>
                </div>
</>

  )
}
