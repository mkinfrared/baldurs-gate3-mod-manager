import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { delay } from "@common/lib";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button, TextField } from "@renderer/shared/ui";

import css from "./SettingsForm.module.scss";
import { SettingsFormProps, SettingsFormValues } from "./SettingsForm.type";

const SettingsForm = ({ className, game }: SettingsFormProps) => {
  const utils = trpc.useUtils();
  const { data } = trpc.settings.getGameSettings.useQuery(game);

  const { mutateAsync } = trpc.settings.updateGameSettings.useMutation({
    onSettled: async () => {
      await utils.invalidate();
    },
  });

  const { register, handleSubmit, formState } = useForm<SettingsFormValues>({
    defaultValues: {
      modSettingsFile: data?.MOD_SETTINGS_PATH,
      modsDirectory: data?.MODS_DIRECTORY,
      backupDirectory: data?.BACKUP_DIR,
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: SettingsFormValues) => {
    await Promise.all([delay(850), mutateAsync({ ...values, gameKey: game })]);
  };

  useEffect(() => {}, []);

  return (
    <form
      className={classNames(css.SettingsForm, className)}
      data-testid="SettingsForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("modSettingsFile")}
        label="Path to modsettings.lsx"
      />
      <TextField
        {...register("modsDirectory")}
        label="Path to Mods directory"
      />
      <TextField
        {...register("backupDirectory")}
        label="Path to Backup directory"
      />
      <Button
        className={css.submitButton}
        color="success"
        disabled={formState.isSubmitting}
        loading={formState.isSubmitting}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export { SettingsForm };
