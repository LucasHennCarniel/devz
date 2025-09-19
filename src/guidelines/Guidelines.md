# Devz Design System Guidelines

## Filosofia de Design
**Minimalismo Tecnológico:** "Menos é mais" - foco na funcionalidade, clareza e experiência do usuário. Design limpo que reflete inovação tecnológica.

## Paleta de Cores
### Cores Principais
- **Azul Primário:** `#1E40AF` (var(--devz-blue-primary)) - CTAs e elementos de destaque
- **Azul Accent:** `#3B82F6` (var(--devz-blue-accent)) - Hover states e elementos secundários
- **Branco:** `#ffffff` (var(--devz-white)) - Backgrounds principais
- **Cinza Claro:** `#F5F6F7` (var(--devz-gray-light)) - Backgrounds sutis
- **Cinza Médio:** `#D1D5DB` (var(--devz-gray-medium)) - Bordas e separadores

### Tons de Texto
- **Texto Principal:** `#1f2937` (text-gray-900)
- **Texto Secundário:** `#6b7280` (text-gray-500) 
- **Texto Sutil:** `#9ca3af` (text-gray-400)

## Tipografia
### Hierarquia
- **Títulos Principais:** Clean, sem font-weight excessivo (usar padrão medium)
- **Subtítulos:** Consistência com text-gray-500 para hierarquia visual
- **Texto Corpo:** Legibilidade máxima com line-height adequado
- **Evitar:** Múltiplas variações de font-weight na mesma seção

### Tamanhos
- Usar os tamanhos padrão do sistema (text-base, text-lg, text-xl, etc.)
- Não sobrescrever com classes personalizadas desnecessárias

## Layout e Espaçamento
### Princípios
- **Espaçamento Generoso:** Permitir respiração visual entre elementos
- **Grid Responsivo:** Mobile-first approach
- **Alinhamento Consistente:** Usar sistema de grid e flexbox

### Espaçamentos Padrão
- **Seções:** py-16 md:py-24 (espaçamento vertical generoso)
- **Container:** max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Elementos:** Múltiplos de 4px (gap-4, gap-6, gap-8, etc.)

## Componentes

### Buttons
- **Primary:** bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white
- **Secondary:** border border-gray-300 text-gray-900 hover:bg-gray-50
- **Ghost/Tertiary:** text-gray-600 hover:text-[#1E40AF] hover:bg-gray-50

### Cards
- **Background:** bg-white
- **Bordas:** border border-gray-200 (sutil)
- **Shadow:** shadow-sm (minimalista)
- **Hover:** hover:shadow-md transition-shadow
- **Padding:** p-6 ou p-8 (generoso)

### Ícones
- **Tamanho Padrão:** h-5 w-5 ou h-6 w-6
- **Cor Neutra:** text-gray-600
- **Background:** bg-gray-100 (quando necessário)
- **Formato:** Arredondado (rounded-lg)

### Inputs e Forms
- **Background:** bg-white
- **Border:** border-gray-300
- **Focus:** focus:border-[#3B82F6] focus:ring-[#3B82F6]
- **Placeholder:** placeholder-gray-400

## Estados de Interação
### Hover
- **Transição Suave:** transition-colors duration-200
- **Mudanças Sutis:** Alteração de background ou cor, sem transformações drásticas
- **Feedback Visual:** Claro mas não excessivo

### Focus
- **Acessibilidade:** Sempre visible e contrastante
- **Consistência:** Usar ring-[#3B82F6] em todo site

## Regras Específicas

### Do's ✅
- Usar espaçamento consistente entre seções
- Manter hierarquia visual clara
- Priorizar legibilidade sobre decoração
- Usar ícones para melhorar compreensão
- Manter consistência de cores em todo site
- Usar transições suaves para feedback

### Don'ts ❌
- Não usar gradientes complexos (apenas para hero/destacues específicos)
- Não sobrecarregar com elementos decorativos
- Não usar múltiplas variações de cor para o mesmo tipo de elemento
- Não quebrar a hierarquia tipográfica estabelecida
- Não usar sombras excessivas
- Não aplicar animações desnecessárias

## Responsividade
### Breakpoints
- **Mobile:** Sempre prioridade (mobile-first)
- **Tablet:** md: (768px+)
- **Desktop:** lg: (1024px+) e xl: (1280px+)

### Grid Systems
- **Mobile:** grid-cols-1
- **Tablet:** md:grid-cols-2 
- **Desktop:** lg:grid-cols-3 ou lg:grid-cols-4

## Seções Específicas

### Hero Section
- Gradiente permitido para impacto visual
- Texto em branco com boa legibilidade
- CTAs contrastantes

### Features/Products
- Cards limpos com ícones neutros
- Espaçamento generoso entre elementos
- Hierarquia clara de informação

### Contact/Forms
- Campos amplos e acessíveis
- Labels claras e contrastantes
- Estados de validação consistentes

### Footer
- Background neutro (gray-50)
- Informações organizadas em grid
- Links com hover states sutis