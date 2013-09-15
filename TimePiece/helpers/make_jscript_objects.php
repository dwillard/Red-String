<?php

$lines = explode(
  ';',
  file_get_contents('/Users/savil/Documents/code/personal/timepiece/timezones.txt')
);

$timezones = array();
foreach ($lines as $line) {
  $tokens = explode(' ', $line);
  $so = substr($tokens[3], 1);
  $wo = $tokens[7];
  $zone = $tokens[11];

  $timezones[] = array(
    'so' => $so,
    'wo' => $wo,
    'zone' => $zone,
  );
}

echo (json_encode($timezones). PHP_EOL);
echo ('done'. PHP_EOL);

$output = '';
foreach ($timezones as $timezone) {
  $output .= "{\n"
          . "\tname: ". $timezone['zone']. ",\n"
          . "\tso: ". $timezone['so']. ",\n"
          . "\two: ". $timezone['wo']. "\n"
          . "},\n";
}
echo($output);

file_put_contents(
  '/Users/savil/Documents/code/personal/timepiece/formatted_timezones.txt',
  $output
);
