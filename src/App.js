import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <header>
      <div id="header">

        <div id="logo-box">
          <img id="logo" src={logo} alt="logo"/>
        </div>

      <div id="category-box">
                <table>
                    <tr id="cell-box">
                        <td class="cell" data-dzial="Liczby i zbiory" id="dzial-1">Liczby i zbiory</td>
                        <td class="cell" data-dzial="Funkcje" id="dzial-2">Funkcje</td>
                        <td class="cell" data-dzial="Trygonometria" id="dzial-3">Trygonometria</td>
                        <td class="cell" data-dzial="Ciągi" id="dzial-4">Ciągi</td>
                        <td class="cell" data-dzial="Geometria analityczna" id="dzial-5">Geometria analityczna</td>
                        <td class="cell" data-dzial="Planimetria" id="dzial-6">Planimetria</td>
                        <td class="cell" data-dzial="Stereometria" id="dzial-7">Stereometria</td>
                        <td class="cell" data-dzial="Rachunek prawdopodobieństwa" id="dzial-8">Rachunek prawdopodobieństwa</td>
                        <td class="cell" data-dzial="Statystyka" id="dzial-9">Statystyka</td>
                    </tr>
                </table>
            </div>

        <div id="category-ham-box">

        </div>


      </div>
    </header>
  );
}

export default App;
