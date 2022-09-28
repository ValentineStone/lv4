<template>
  <ul>
    <aside itemscope="" itemtype="http://schema.org/SiteNavigationElement">
      <ul class="navigate_parent" itemprop="about" itemscope="" itemtype="http://schema.org/ItemList">
        <li v-for="(parent,index) in $store.state.navigate.structure" :key="index" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ItemList">
          <router-link :to="parent.url" itemprop="url" class="navigate_parent_item">{{parent.name}}</router-link>
          <meta itemprop="name" :content="parent.name"/>
          <ul v-if="parent.child" :key="`${index}_child`" class="navigate_child" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ItemList">
            <li v-for="child in parent.child" :key="child.name" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ItemList">
              <router-link :to="child.url" itemprop="url" class="navigate_child_item" :class="{navigate_list:child.child}">{{child.name}}</router-link>
              <meta itemprop="name" :content="child.name"/>
              <ul v-if="child.child" :key="`${parent.index}_${child.index}`" class="navigate_child" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ItemList">
                <li v-for="childDeep in child.child" :key="childDeep.name" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ItemList">
                  <router-link :to="childDeep.url" itemprop="url" class="navigate_child_item">{{childDeep.name}}</router-link>
                  <meta itemprop="name" :content="childDeep.name"/>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </ul>
</template>
