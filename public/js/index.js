import BubbleSort from './sorts/bubblesort.js';
import {resizeBarHeight, swapBars, sortStatus} from './resizeBars.js';

//the initial unsorted array
function createRandomArray(leng){
	var array = [];
	for (var i = 1; i < leng +1;i++){
		array.push(i);
	}
	var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
	return array;
}
var unsortedArr = createRandomArray(200);
var unsortedArrCopy = unsortedArr.slice(0);

//GLOBAL HTML ELEMENTS
var sortStatusElement = $('#arrayStatus'); //status of array sorting
var algoChosen = $('#algoChosen'); //which algo
var visualization = $('.visualization'); //the visual area
var sortOptionBtn = $('.sortOptionBtn'); //the radio toggle for the algo chosen
var beginSort = $('#beginSort'); //begin sort button
var quickSortOptionsToggle = $('#quickSortOptionsToggle'); //toggle hide/show quicksort optns
var quickSortOptn = 'quickSortFirst';
var currentSort = 'bubbleSort'; //the current sort

//GLOBAL CREATED HTML ELEMENTS
var dataBars = []; //the actual data bar elements

// initialize setup
sortStatusElement.text('INITIAL UNSORTED ARRAY');

var arraySortInProgress = unsortedArr.slice(0);
var maxnum = Math.max(...unsortedArr);

//curent sort obj
var currentsortobj = {bubbleSort: null, quickSortFirst: null, quickSortLast: null,quickSortRandom:null};
var currentsortobjkey = 'bubbleSort';

//create a data bar element function
function makeDataBar(arr) {
  //calculate bar width to fit page
  var barWidth = (visualization.width() / arr.length).toString() + 'px';

  //loop through array
  for (var i = 0; i < arr.length; i++) {
    //create bar element
    var dataBar = $('<div>');
    dataBar.addClass('dataBar');
    dataBar.attr('value', i.toString());
    var barHeight = ((250 * arr[i]) / maxnum).toString() + 'px';
    dataBar.css({
      width: barWidth,
      height: barHeight,
      display: 'inline-block'
    });
    dataBars.push(dataBar);
    $('.visualization').append(dataBar);
  }
  //resize bars on screen resize
  $(window).resize(function() {
    windowResizeBarWidth(arr);
  });
}

function reset() {
  if (currentsortobj[currentsortobjkey] != null)
    currentsortobj[currentsortobjkey].reset();
  console.log('resetting');
  console.log(unsortedArr);
  for (var i = 0; i < dataBars.length; i++) {
    var barHeight = ((250 * unsortedArr[i]) / maxnum).toString() + 'px';
    dataBars[i].css('height', barHeight);
  }
  arraySortInProgress = unsortedArr.slice(0);
  sortStatus(sortStatusElement, currentSort, 'reset');
}
$('#reset').on('click', function() {
  // console.log(unsortedArr);
  reset();
});

function pause() {
  if (currentsortobj[currentsortobjkey] != null)
    console.log(currentsortobj[currentsortobjkey]);
  currentsortobj[currentsortobjkey].pause();
  sortStatus(sortStatusElement, currentSort, 'paused');
}
$('#pause').on('click', function() {
  pause();
});

//resize bars on screen resize function
function windowResizeBarWidth(arr) {
  var barWidth = (visualization.width() / arr.length).toString() + 'px';
  for (var i = 0; i < dataBars.length; i++) {
    dataBars[i].css({
      width: barWidth
    });
  }
}

$('.sortOptionBtn').on('click', function() {
  reset();
	var previousActiveSortChoice = $('.sortOptnActive');
  previousActiveSortChoice.removeClass('sortOptnActive');
  var activeSortChoice = $(this);
  activeSortChoice.addClass('sortOptnActive');
  var sortChosen = activeSortChoice.attr('data-sort');
  currentSort = sortChosen;
  if (sortChosen === 'quickSort') {
    quickSortOptionsToggle.show();
    var activeQuickChoice = $('.quickSortOptionActive');
    quickSortOptn = activeQuickChoice.attr('data-sort');
    currentSort = quickSortOptn;
  } else {
    quickSortOptionsToggle.hide();
  }
  currentsortobjkey = currentSort;
  sortStatus(sortStatusElement, sortChosen, ' ready');
  console.log(sortChosen);
});

$('.quickSortOptionBtn').on('click', function() {
  var prevActiveQuickChoice = $('.quickSortOptionActive');
  prevActiveQuickChoice.removeClass('quickSortOptionActive');
  var activeQuickChoice = $(this);
  activeQuickChoice.addClass('quickSortOptionActive');
  var sortChosen = activeQuickChoice.attr('data-sort');
  sortStatus(sortStatusElement, sortChosen, ' ready');
});

//beginSort onclick
beginSort.on('click', function() {
  var activeSortChoice = $('.sortOptnActive');
  var sortChosen = activeSortChoice.attr('data-sort');
  currentsortobjkey = sortChosen;
  var sorted;
  if (currentsortobj[currentsortobjkey] == null) {
    if (sortChosen === 'bubbleSort') {
      console.log('bubbleSort Begin');
      sortStatus(sortStatusElement, sortChosen, 'in progress');
      currentsortobj[currentsortobjkey] = new BubbleSort(
        unsortedArrCopy,
        maxnum,
        dataBars,
        resizeBarHeight,
        swapBars
      );

      // console.log(sorted);
    } else if (sortChosen === 'quickSort') {
      //show quick sort options
      console.log('quicksort Begin');
      quickSort(arraySortInProgress, dataBars, false, false);
    } else if (sortChosen === 'fartSort') {
      console.log('fart Begin');
    }
  }
  currentsortobj[currentsortobjkey].start();
});

$(document).ready(function() {
  makeDataBar(unsortedArr);
});
