import BubbleSort from './sorts/bubblesort.js';
import {resizeBarHeight, swapBars, sortStatus} from './resizeBars.js';

//the initial unsorted array
var unsortedArr = [
  326,
  1,
  251,
  24,
  284,
  364,
  287,
  74,
  89,
  63,
  455,
  130,
  408,
  378,
  333,
  49,
  69,
  335,
  195,
  145,
  122,
  454,
  30,
  277,
  208,
  293,
  311,
  88,
  32,
  5,
  304,
  239,
  448,
  61,
  98,
  382,
  401,
  452,
  233,
  150,
  109,
  252,
  305,
  51,
  161,
  480,
  191,
  44,
  206,
  451,
  141,
  182,
  320,
  355,
  402,
  439,
  13,
  430,
  449,
  119,
  166,
  493,
  396,
  139,
  99,
  262,
  163,
  410,
  422,
  275,
  212,
  416,
  272,
  394,
  379,
  211,
  491,
  11,
  133,
  361,
  160,
  338,
  87,
  199,
  373,
  38,
  269,
  73,
  68,
  359,
  165,
  291,
  418,
  159,
  481,
  289,
  469,
  23,
  432,
  2,
  315,
  247,
  462,
  189,
  134,
  330,
  164,
  153,
  274,
  371,
  267,
  377,
  347,
  201,
  19,
  475,
  66,
  260,
  497,
  466,
  426,
  12,
  214,
  306,
  386,
  194,
  129,
  219,
  10,
  288,
  348,
  188,
  59,
  440,
  498,
  447,
  297,
  446,
  57,
  313,
  175,
  80,
  461,
  312,
  7,
  215,
  248,
  107,
  389,
  46,
  358,
  229,
  72,
  15,
  492,
  240,
  217,
  420,
  110,
  20,
  383,
  124,
  321,
  183,
  174,
  374,
  17,
  488,
  33,
  256,
  235,
  353,
  387,
  117,
  479,
  147,
  483,
  424,
  428,
  205,
  28,
  392,
  398,
  216,
  350,
  34,
  342,
  135,
  366,
  125,
  258,
  329,
  362,
  308,
  295,
  441,
  242,
  95,
  406,
  411,
  286,
  14,
  352,
  433,
  123,
  340,
  499,
  101,
  276,
  37,
  468,
  298,
  75,
  438,
  131,
  138,
  96,
  64,
  246,
  476,
  487,
  151,
  283,
  106,
  83,
  273,
  202,
  323,
  357,
  414,
  478,
  172,
  60,
  121,
  127,
  152,
  48,
  415,
  234,
  156,
  8,
  171,
  176,
  41,
  100,
  413,
  76,
  128,
  399,
  132,
  154,
  423,
  404,
  302,
  42,
  341,
  173,
  126,
  427,
  369,
  26,
  453,
  180,
  184,
  55,
  167,
  77,
  307,
  111,
  445,
  237,
  16,
  344,
  290,
  25,
  356,
  114,
  316,
  39,
  336,
  90,
  3,
  465,
  162,
  470,
  343,
  429,
  303,
  363,
  29,
  136,
  203,
  241,
  4,
  93,
  221,
  271,
  395,
  317,
  339,
  86,
  225,
  436,
  325,
  47,
  442,
  137,
  285,
  474,
  337,
  230,
  376,
  345,
  245,
  43,
  236,
  484,
  318,
  255,
  105,
  388,
  397,
  27,
  6,
  31,
  148,
  372,
  35,
  393,
  460,
  384,
  349,
  490,
  264,
  84,
  300,
  204,
  482,
  168,
  67,
  218,
  331,
  21,
  473,
  210,
  496,
  467,
  431,
  116,
  405,
  450,
  327,
  407,
  261,
  309,
  157,
  458,
  223,
  464,
  224,
  18,
  142,
  471,
  457,
  52,
  82,
  380,
  263,
  367,
  324,
  281,
  97,
  412,
  85,
  149,
  346,
  265,
  368,
  193,
  266,
  243,
  434,
  254,
  456,
  115,
  118,
  381,
  70,
  190,
  94,
  228,
  296,
  314,
  257,
  403,
  170,
  232,
  250,
  360,
  65,
  417,
  351,
  71,
  62,
  158,
  365,
  322,
  500,
  282,
  375,
  177,
  187,
  459,
  112,
  319,
  155,
  489,
  391,
  178,
  463,
  22,
  53,
  91,
  435,
  231,
  56,
  103,
  36,
  253,
  477,
  186,
  45,
  425,
  120,
  50,
  140,
  443,
  146,
  108,
  259,
  238,
  192,
  222,
  213,
  200,
  227,
  354,
  437,
  280,
  207,
  143,
  310,
  385,
  370,
  58,
  444,
  198,
  278,
  54,
  494,
  390,
  113,
  328,
  144,
  268,
  78,
  9,
  102,
  197,
  301,
  226,
  220,
  334,
  419,
  299,
  409,
  421,
  292,
  332,
  209,
  244,
  196,
  179,
  472,
  279,
  40,
  486,
  270,
  185,
  181,
  485,
  495,
  81,
  169,
  294,
  79,
  400,
  92,
  104,
  249
];

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
var currentsortobj = {bubbleSort: null};
var currentsortobjkey = 'bubbleSort';
var currentquicksortkey = 'first';

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
  if (currentTimeOut) {
    clearTimeout(currentTimeOut);
  }
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
  if (currentTimeOut) {
    clearTimeout(currentTimeOut);
  }
  var prevActiveQuickChoice = $('.quickSortOptionActive');
  prevActiveQuickChoice.removeClass('quickSortOptionActive');
  var activeQuickChoice = $(this);
  activeQuickChoice.addClass('quickSortOptionActive');
  sortChosen = activeQuickChoice.attr('data-sort');
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
        unsortedArr,
        maxnum,
        dataBars,
        resizeBarHeight,
        swapBars
      );

      currentsortobj[currentsortobjkey].start();

      // console.log(sorted);
    } else if (sortChosen === 'quickSort') {
      //show quick sort options
      console.log('quicksort Begin');
      quickSort(arraySortInProgress, dataBars, false, false);
    } else if (sortChosen === 'fartSort') {
      console.log('fart Begin');
    }
  } else {
    currentsortobj[currentsortobjkey].start();
  }
});

$(document).ready(function() {
  makeDataBar(unsortedArr);
});
