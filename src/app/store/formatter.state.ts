import { inject, Injectable } from '@angular/core';
import { FormatterStateModel } from './formatter.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormatterActions } from './formatter.actions';
import { FormatterService } from '../services/formatter.service';

@State<FormatterStateModel>({
  name: 'formatter',
  defaults: {
    config: null,
    result: '',
  },
})
@Injectable()
export class FormatterState {
  formatterService = inject(FormatterService);

  @Selector()
  static getConfig(state: FormatterStateModel) {
    return state.config;
  }

  @Selector()
  static getResult(state: FormatterStateModel) {
    return state.result;
  }

  @Action(FormatterActions.UpdateDescription)
  updateDescription(
    ctx: StateContext<FormatterStateModel>,
    action: FormatterActions.UpdateDescription
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      config: action.formConfig,
      result: this.formatterService.formatDescription(action.formConfig),
    });
  }
}
