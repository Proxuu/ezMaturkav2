import logo from './img/logo.png';
import './App.css';



function App() {
  return (
      <header>
        <div id="background"></div>
        <div id="header">
            <div id="logo"><a href="index.php"><img src={logo} height="50px" /></a></div>
            <div id="category-box">
                <table>
                    <tr id="cell-box">
                        <td class="cell">Liczby i zbiory</td>
                        <td class="cell">Funkcje</td>
                        <td class="cell">Trygonometria</td>
                        <td class="cell">Ciągi</td>
                        <td class="cell">Geometria analityczna</td>
                        <td class="cell">Planimetria</td>
                        <td class="cell">Stereometria</td>
                        <td class="cell">Rachunek prawdopodobieństwa</td>
                        <td class="cell">Statystyka</td>
                    </tr>
                </table>
            </div>
            <div id="user-box"></div>
            <nav>
                <div class="hamburger" onClick={toggleMenu}>
                    <svg class="ct-icon" width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" data-type="type-1">
                        <rect y="0.00" width="18" height="1.7" rx="1"></rect>
                        <rect y="6.15" width="18" height="1.7" rx="1"></rect>
                        <rect y="12.3" width="18" height="1.7" rx="1"></rect>
                    </svg>
                </div>
                <div id="nav-links" class="nav-links">
                    <table>
                        <tr>
                            <td class="ham-cell"><a class="link" href="index.php">Strona główna</a></td>
                        </tr>
                    </table>
                    <table id="table">
                        <tr><td class="ham-cell">Liczby i zbiory</td></tr>
                        <tr><td class="ham-cell">Funkcje</td></tr>
                        <tr><td class="ham-cell">Trygonometria</td></tr>
                        <tr><td class="ham-cell">Ciągi</td></tr>
                        <tr><td class="ham-cell">Geometria analityczna</td></tr>
                        <tr><td class="ham-cell">Planimetria</td></tr>
                        <tr><td class="ham-cell">Stereometria</td></tr>
                        <tr><td class="ham-cell">Rachunek prawdopodobieństwa</td></tr>
                        <tr><td class="ham-cell">Statystyka</td></tr>
                    </table>


                    <table id="logout-table">
                                <tr>
                                    <td class="ham-cell"><a class="logout-link" href="logout.php">Wyloguj</a></td>
                                </tr>
                    </table>


                    
                </div>
            </nav>
        </div>
    </header>

  );
}


function toggleMenu(){
  
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
  const background = document.getElementById('background');
  background.classList.toggle('activee')



}



export default App;
