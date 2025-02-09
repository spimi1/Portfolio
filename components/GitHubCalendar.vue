<template>
  <div class="github-calendar">
    <div class="contribution-graph">
      <div 
        v-for="(contribution, index) in processedContributions" 
        :key="index"
        class="contribution-cell"
        :style="{
          backgroundColor: getContributionColor(contribution.count)
        }"
        :title="`${contribution.count} contributions on ${formatDate(contribution.date)}`"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  contributions: {
    type: Array,
    required: true
  }
})

const processedContributions = computed(() => {
  const today = new Date()
  const oneYearAgo = new Date(today)
  oneYearAgo.setFullYear(today.getFullYear() - 1)
  
  const contributionMap = new Map(props.contributions.map(c => [c.date.split('T')[0], c.count]))
  
  const result = []
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const date = d.toISOString().split('T')[0]
    result.push({
      date,
      count: contributionMap.get(date) || 0
    })
  }
  
  return result
})

function getContributionColor(count) {
  if (count === 0) return '#1a1a1a'
  if (count <= 2) return '#0e4429'
  if (count <= 4) return '#006d32'
  if (count <= 6) return '#26a641'
  return '#39d353'
}

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped>
.github-calendar {
  padding: 1rem;
  background: #0d1117;
  border-radius: 0.5rem;
}

.contribution-graph {
  display: grid;
  grid-template-columns: repeat(52, 1fr);
  gap: 2px;
}

.contribution-cell {
  aspect-ratio: 1;
  border-radius: 2px;
  transition: transform 0.2s;
}

.contribution-cell:hover {
  transform: scale(1.2);
}
</style>