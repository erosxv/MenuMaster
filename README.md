# MenuMaster
um aplicativo para a faculdade
1. Explicação do código:
React Navigation: Usamos o react-navigation para gerenciar a navegação entre as páginas do app.
MenuScreen: Exibe dois itens de cardápio. Cada item tem um botão que, ao ser clicado, leva o usuário à página de DetalhesScreen.
DetailsScreen: Exibe os detalhes do item que foi clicado, como nome, descrição e preço.
2. Como executar:
Instale o React Navigation:
bash
Copiar
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
Execute o app em um dispositivo ou emulador:
bash
Copiar
npx react-native run-android # para Android
npx react-native run-ios     # para iOS
