import Vue from 'vue';
import { format } from 'date-fns';

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('dateString', function (value) {
  if (!value) {
    return 'No date';
  }

  return format(new Date(value), "do MMMM, yyyy");
});