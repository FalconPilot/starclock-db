import * as React from 'react'

import { categories, rootCategory } from 'constants/routes'

import { CategoryButton, CategoryLink, CategoryWrapper, SidebarWrapper } from './styled'

export const SidebarView: React.FunctionComponent<{
  openedTab: string | null
  onCategoryClick: (tab: string) => () => void
}> = ({
  openedTab,
  onCategoryClick
}) => {
  return (
    <SidebarWrapper>
      {rootCategory.map(link => (
        <CategoryLink key={link.to} to={link.to}>{link.title}</CategoryLink>
      ))}
      {Object.entries(categories).map(([key, category]) => (
        <CategoryWrapper
          key={key}
          expanded={openedTab === key}
          linksAmount={category.links.length}
        >
          <CategoryButton onClick={onCategoryClick(key)}>{category.title}</CategoryButton>
          {category.links.map(link => (
            <CategoryLink key={`${key}-${link.to}`} to={link.to} subLink>{link.title}</CategoryLink>
          ))}
        </CategoryWrapper>
      ))}
    </SidebarWrapper>
  )
}
