/**
 * The printSection function runs when the button with the onclick property in the html is clicked. Gets the id property of the field to be printed in. 
 */
function printSection(section){
    /**
     * We get html in the id property of button 
     */
    var printSection= document.getElementById(section);
    /**
     * We have set the width and height properties for the window to be opened.
     */
    var winOpen = window.open('','','width=900,height=650');
    /**
     * include document for popup window
     */
    winOpen.document.write(printSection.innerHTML);
    /**
     * Close opened document
     */
    winOpen.document.close();
    /**
     * Created document in focus
     */
    winOpen.focus();
    /**
     * Print popup window in focus to document
     */
    winOpen.print();
    /**
     * Close popup window
     */
    winOpen.close();
}
/**
 * Now print full page
 */
function printFullPage(){
    window.print();
}